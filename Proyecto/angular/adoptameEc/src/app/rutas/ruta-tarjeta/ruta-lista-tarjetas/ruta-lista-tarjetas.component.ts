import { UsuarioService } from './../../../servicios/http/usuario.service';
import { TarjetaService } from './../../../servicios/http/tarjeta.service';
import { Tarjeta } from './../../../modelos/tarjeta';
import { Usuario } from './../../../modelos/usuario';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-ruta-lista-tarjetas',
  templateUrl: './ruta-lista-tarjetas.component.html',
  styleUrls: ['./ruta-lista-tarjetas.component.css']
})
export class RutaListaTarjetasComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  columnas: string[] = ['numero', 'caducidad', 'cvv', "usuario", "acciones"];

  arregloTarjetas: Tarjeta[] = [];
  arregloUsuarios: Usuario[] = [];

  dataSource = new MatTableDataSource<Tarjeta>();

  constructor(
    private readonly _tarjetaService: TarjetaService,
    private readonly _usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    const observableTarjetas = this._tarjetaService.getTarjetas();
    observableTarjetas
      .subscribe(
        (tarjetas: Tarjeta[]) => {
          this.arregloTarjetas = tarjetas;
          this.dataSource.data = this.arregloTarjetas;
        },
        error => {
          console.error('Error obteniendo tarjetas', error);
        }
      );

    const observableUsuarios = this._usuarioService.getUsuarios();
    observableUsuarios
      .subscribe(
        (usuarios: Usuario[]) => {
          this.arregloUsuarios = usuarios;
        },
        error => {
          console.error('Error obteniendo usuarios', error);
        }
      );

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  obtenerPropietarioTarjeta(id: number): string {
    const propietario = this.arregloUsuarios.find(usuario => usuario.id === id);
    return propietario?.nombre + ' ' + propietario?.apellido;
  }

  filtrarTarjeta(busqueda: string) {
    this.dataSource.filter = busqueda.trim().toLowerCase();
  }

  eliminarTarjeta(idTarjeta: number) {
    const observableEliminarTarjeta = this._tarjetaService.deleteTarjeta(idTarjeta);
    observableEliminarTarjeta
      .subscribe(
        () => {
          const indice = this.arregloTarjetas.findIndex(tarjeta => tarjeta.id === idTarjeta);
          this.arregloTarjetas.splice(indice, 1);
          this.dataSource.data = this.arregloTarjetas;
        },
        error => {
          console.error('Error eliminando tarjeta', error);
        }
      );
  }
}

import { UsuarioService } from './../../../servicios/http/usuario.service';
import { DonacionService } from './../../../servicios/http/donacion.service';
import { Usuario } from './../../../modelos/usuario';
import { Donacion } from './../../../modelos/donacion';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-ruta-lista-donaciones',
  templateUrl: './ruta-lista-donaciones.component.html',
  styleUrls: ['./ruta-lista-donaciones.component.css']
})
export class RutaListaDonacionesComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  columnas: string[] = ['usuario', 'mascota', 'valor', 'fecha'];

  arregloDonaciones: Donacion[] = [];
  arregloUsuarios: Usuario[] = [];

  dataSource = new MatTableDataSource<Donacion>();

  constructor(
    private readonly _donacionService: DonacionService,
    private readonly _usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    const observableDonaciones = this._donacionService.getDonaciones();
    observableDonaciones
      .subscribe(
        (donaciones: Donacion[]) => {
          this.arregloDonaciones = donaciones;
          this.dataSource.data = this.arregloDonaciones;
        },
        error => {
          console.error('Error obteniendo donaciones', error);
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

  obtenerUsuarioDonacion(id: number): string {
    const usuario = this.arregloUsuarios.find(usuario => usuario.id === id);
    return usuario?.nombre + ' ' + usuario?.apellido;
  }

  convertirFecha(fecha: number): string {
    const fechaDonacion: Date = new Date(fecha * 1000);
    return fechaDonacion.toUTCString();
  }

  filtrarDonacion(busqueda: string) {
    this.dataSource.filter = busqueda.trim().toLowerCase();
  }
}

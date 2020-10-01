import { UsuarioService } from './../../../servicios/http/usuario.service';
import { Usuario } from './../../../modelos/usuario';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ruta-lista-usuarios',
  templateUrl: './ruta-lista-usuarios.component.html',
  styleUrls: ['./ruta-lista-usuarios.component.css']
})
export class RutaListaUsuariosComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  columnas: string[] = ['nombre', 'email', 'provincia', "mascotas", "ninos", "acciones"];

  arregloUsuarios: Usuario[] = [];

  dataSource = new MatTableDataSource<Usuario>();

  constructor(
    private readonly _usuarioService: UsuarioService,
  ) { }

  ngOnInit(): void {
    const observableUsuarios = this._usuarioService.getUsuarios();
    observableUsuarios
      .subscribe(
        (usuarios: Usuario[]) => {
          this.arregloUsuarios = usuarios;
          this.dataSource.data = this.arregloUsuarios;
        },
        error => {
          console.error('Error obteniendo usuarios', error);
        }
      );

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  filtrarUsuario(busqueda: string) {
    this.dataSource.filter = busqueda.trim().toLowerCase();
  }

  eliminarUsuario(idUsuario: number) {
    const observableEliminarUsuario = this._usuarioService.deleteUsuario(idUsuario);
    observableEliminarUsuario
      .subscribe(
        () => {
          const indice = this.arregloUsuarios.findIndex(usuario => usuario.id === idUsuario);
          this.arregloUsuarios.splice(indice, 1);
          this.dataSource.data = this.arregloUsuarios;
        },
        error => {
          console.error('Error eliminando usuario', error);
        }
      );
  }
}

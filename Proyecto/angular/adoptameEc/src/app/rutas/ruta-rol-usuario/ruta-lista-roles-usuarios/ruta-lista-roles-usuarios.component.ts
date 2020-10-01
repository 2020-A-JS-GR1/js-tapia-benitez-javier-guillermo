import { UsuarioService } from './../../../servicios/http/usuario.service';
import { RolService } from './../../../servicios/http/rol.service';
import { RolUsuarioService } from './../../../servicios/http/rol-usuario.service';
import { Usuario } from './../../../modelos/usuario';
import { Rol } from './../../../modelos/rol';
import { RolUsuario } from './../../../modelos/rol-usuario';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-ruta-lista-roles-usuarios',
  templateUrl: './ruta-lista-roles-usuarios.component.html',
  styleUrls: ['./ruta-lista-roles-usuarios.component.css']
})
export class RutaListaRolesUsuariosComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  columnas: string[] = ['nombre', 'email', "rol", "acciones"];

  arregloRolesUsuarios: RolUsuario[] = [];

  dataSource = new MatTableDataSource<RolUsuario>();

  constructor(
    private readonly _rolUsuarioService: RolUsuarioService,
  ) { }

  ngOnInit(): void {
    const observableRolesUsuarios = this._rolUsuarioService.getRolesUsuarios();
    observableRolesUsuarios
      .subscribe(
        (rolesUsuarios: RolUsuario[]) => {
          this.arregloRolesUsuarios = rolesUsuarios;
          this.dataSource.data = this.arregloRolesUsuarios;
        },
        error => {
          console.error('Error obteniendo roles de usuario', error);
        }
      );

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  filtrarRolUsuario(busqueda: string) {
    this.dataSource.filter = busqueda.trim().toLowerCase();
  }

  eliminarRolUsuario(idRolUsuario: number) {
    const observableEliminarRolUsuario = this._rolUsuarioService.deleteRolUsuario(idRolUsuario);
    observableEliminarRolUsuario
      .subscribe(
        () => {
          const indice = this.arregloRolesUsuarios.findIndex(rolUsuario => rolUsuario.id === idRolUsuario);
          this.arregloRolesUsuarios.splice(indice, 1);
          this.dataSource.data = this.arregloRolesUsuarios;
        },
        error => {
          console.error('Error eliminando rol de usuario', error);
        }
      );
  }
}

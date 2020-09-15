import { UsuarioService } from './../../servicios/http/usuario.service';
import { RolService } from './../../servicios/http/rol.service';
import { RolUsuarioService } from './../../servicios/http/rol-usuario.service';
import { Usuario } from './../../modelos/usuario';
import { RolUsuario } from './../../modelos/rol-usuario';
import { Component, OnInit } from '@angular/core';
import { Rol } from 'src/app/modelos/rol';

@Component({
  selector: 'app-ruta-lista-roles-usuarios',
  templateUrl: './ruta-lista-roles-usuarios.component.html',
  styleUrls: ['./ruta-lista-roles-usuarios.component.css']
})
export class RutaListaRolesUsuariosComponent implements OnInit {

  arregloRolesUsuarios: RolUsuario[] = [];
  arregloRoles: Rol[] = [];
  arregloUsuarios: Usuario[] = [];

  constructor(
    private readonly _rolUsuarioService: RolUsuarioService,
    private readonly _rolService: RolService,
    private readonly _usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    const observableRolesUsuarios = this._rolUsuarioService.getRolesUsuarios();
    observableRolesUsuarios
      .subscribe(
        (rolesUsuarios: RolUsuario[]) => {
          this.arregloRolesUsuarios = rolesUsuarios;
        },
        error => {
          console.error('Error', error);
        }
      );

    const observableUsuarios = this._usuarioService.getUsuarios();
    observableUsuarios
      .subscribe(
        (usuarios: Usuario[]) => {
          this.arregloUsuarios = usuarios;
        },
        error => {
          console.error('Error', error);
        }
      );

    const observableRoles = this._rolService.getRoles();
    observableRoles
      .subscribe(
        (roles: Rol[]) => {
          this.arregloRoles = roles;
        },
        error => {
          console.error('Error', error);
        }
      );
  }

  obtenerUsuarioRol(id: number): string {
    const usuario = this.arregloUsuarios.find(usuario => usuario.id === id);
    return usuario?.nombre + ' ' + usuario?.apellido;
  }

  obtenerRolUsuario(id: number): string {
    const rol = this.arregloRoles.find(rol => rol.id === id);
    return rol?.nombre;
  }
}

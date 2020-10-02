import { RolUsuarioService } from './../../servicios/http/rol-usuario.service';
import { Component, OnInit } from '@angular/core';
import { RolUsuario } from 'src/app/modelos/rol-usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ruta-login',
  templateUrl: './ruta-login.component.html',
  styleUrls: ['./ruta-login.component.css']
})
export class RutaLoginComponent implements OnInit {

  arregloRolesUsuarios: RolUsuario[] = [];

  constructor(
    private readonly _rolUsuarioService: RolUsuarioService,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
    const observableRolesUsuarios = this._rolUsuarioService.getRolesUsuarios();
    observableRolesUsuarios
      .subscribe(
        (rolesUsuarios: RolUsuario[]) => {
          this.arregloRolesUsuarios = rolesUsuarios;
        },
        error => {
          console.error('Error obteniendo usuarios', error);
        }
      );
  }

  mostrarRuta(rol: boolean) {
      if (rol) {
        const rutaAdministrador = ['estadisticas'];
        this._router.navigate(rutaAdministrador);
      } else {
        const rutaUsuario = ['inicio'];
        this._router.navigate(rutaUsuario);
      } 
  }
}

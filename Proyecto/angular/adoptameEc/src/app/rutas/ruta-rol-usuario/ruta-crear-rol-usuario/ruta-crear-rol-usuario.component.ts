import { RolUsuarioService } from 'src/app/servicios/http/rol-usuario.service';
import { RolUsuario } from './../../../modelos/rol-usuario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ruta-crear-rol-usuario',
  templateUrl: './ruta-crear-rol-usuario.component.html',
  styleUrls: ['./ruta-crear-rol-usuario.component.css']
})
export class RutaCrearRolUsuarioComponent implements OnInit {

  constructor(
    private readonly _rolUsuarioService: RolUsuarioService,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
  }

  crearRolUsuario(rolUsuario: RolUsuario) {
    const observableCrearRolUsuario = this._rolUsuarioService.createRolUsuario(rolUsuario);
    observableCrearRolUsuario
      .subscribe(
        () => {
          console.log('Rol de usuario registrado: ', rolUsuario);
          const ruta = ['/usuarios', 'lista-roles-usuarios'];
          this._router.navigate(ruta);
        },
        error => {
          console.error('Error registrando rol de usuario', error);
        }
      );
  }
}

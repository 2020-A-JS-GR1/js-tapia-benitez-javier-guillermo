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

  nuevoRolUsuario: RolUsuario;

  constructor(
    private readonly _rolUsuarioService: RolUsuarioService,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
  }

  crearRolUsuario(formulario: NgForm) {
    this.nuevoRolUsuario = formulario.form.value;
    this.nuevoRolUsuario.id_usuario = Number(this.nuevoRolUsuario.id_usuario);
    this.nuevoRolUsuario.id_rol = Number(this.nuevoRolUsuario.id_rol);
    const observableCrearRolUsuario = this._rolUsuarioService.createRolUsuario(this.nuevoRolUsuario);
    observableCrearRolUsuario
      .subscribe(
        () => {
          console.log('Rol de usuario registrado: ', this.nuevoRolUsuario);
          const ruta = ['/usuarios', 'lista-roles-usuarios'];
          this._router.navigate(ruta);
        },
        error => {
          console.error('Error registrando rol de usuario', error);
        }
      );
  }
}

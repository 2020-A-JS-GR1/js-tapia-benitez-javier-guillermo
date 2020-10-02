import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RolUsuario } from 'src/app/modelos/rol-usuario';
import { Usuario } from 'src/app/modelos/usuario';
import { SesionService } from 'src/app/servicios/sesion.service';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent implements OnInit {

  @Input()
  rolesUsuarios: RolUsuario[] = [];

  @Input()

  @Output()
  rutaSesionEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  validacion: boolean = false;
  error: string;

  emailFormulario: string;
  contrasenaFormulario: string;

  constructor(
    private _sesionService: SesionService
  ) { }

  ngOnInit(): void {
  }

  validarUsuario(formulario: NgForm) {
    const validarUsuario =  this.rolesUsuarios.find(usuario => usuario.id_usuario.email === formulario.form.value.email);
    if (validarUsuario) {
      if(validarUsuario.id_usuario.contrasena === formulario.form.value.contrasena) {
        this._sesionService.cambiarSesion(true);
        this._sesionService.cambiarSesionUsuario(validarUsuario.id_usuario.id);
        if (validarUsuario.id_rol.nombre === 'Administrador') {
          this._sesionService.cambiarRol(true);
          this.validacion = true;
        } else {
          this._sesionService.cambiarRol(false);
          this.validacion = false;
        }
        this.rutaSesionEvent.emit(this.validacion);
      } else {
        this.error = '* La contraseña que ingresaste es incorrecta'
      }
    } else {
      this.error = '* Usuario no registrado';
    }
  }
}

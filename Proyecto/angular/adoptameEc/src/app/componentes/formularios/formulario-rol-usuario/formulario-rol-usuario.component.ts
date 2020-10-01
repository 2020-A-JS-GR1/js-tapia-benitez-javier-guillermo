import { UsuarioService } from './../../../servicios/http/usuario.service';
import { RolService } from './../../../servicios/http/rol.service';
import { Rol } from './../../../modelos/rol';
import { Usuario } from './../../../modelos/usuario';
import { NgForm } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RolUsuario } from 'src/app/modelos/rol-usuario';

@Component({
  selector: 'app-formulario-rol-usuario',
  templateUrl: './formulario-rol-usuario.component.html',
  styleUrls: ['./formulario-rol-usuario.component.css']
})
export class FormularioRolUsuarioComponent implements OnInit {

  @Input()
  rolUsuarioEditar: RolUsuario;

  @Output()
  enviarFormularioEvent: EventEmitter<RolUsuario> = new EventEmitter<RolUsuario>();

  arregloUsuarios: Usuario[] = [];
  arregloRoles: Rol[] = [];

  seleccionUsuario: boolean = true;
  seleccionRol: boolean = true;

  usuarioIdFormulario: number = 0;
  rolIdFormulario: number = 0;

  constructor(
    private readonly _rolService: RolService,
    private readonly _usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
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

    const observableRoles = this._rolService.getRoles();
    observableRoles
      .subscribe(
        (roles: Rol[]) => {
          this.arregloRoles = roles;
        },
        error => {
          console.error('Error obteniendo roles', error);
        }
      );

    if (this.rolUsuarioEditar) {
      this.llenarFormulario();
    }
  }

  enviarFormulario(formulario: NgForm) {
    this.enviarFormularioEvent.emit(
      new RolUsuario(
        formulario.form.value.id_usuario,
        formulario.form.value.id_rol
      )
    );
  }

  llenarFormulario() {
    this.usuarioIdFormulario = this.rolUsuarioEditar.id_usuario.id;
    this.rolIdFormulario = this.rolUsuarioEditar.id_rol.id;

    this.seleccionarOpcionUsuario();
    this.selecionarOpcionRol();
  }

  seleccionarOpcionUsuario() {
    if (Number(this.usuarioIdFormulario) != 0) {
      this.seleccionUsuario = false;
    } else {
      this.seleccionUsuario = true;
    }
  }

  selecionarOpcionRol() {
    if (Number(this.rolIdFormulario) != 0) {
      this.seleccionRol = false;
    } else {
      this.seleccionRol = true;
    }
  }
}

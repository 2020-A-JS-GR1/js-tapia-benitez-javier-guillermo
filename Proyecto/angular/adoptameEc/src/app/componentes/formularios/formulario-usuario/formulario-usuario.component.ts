import { UsuarioService } from './../../../servicios/http/usuario.service';
import { Usuario } from './../../../modelos/usuario';
import { Provincia } from './../../../modelos/provincia';
import { ProvinciaService } from './../../../servicios/http/provincia.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.css']
})
export class FormularioUsuarioComponent implements OnInit {

  @Input()
  idUsuarioEditar: number;

  @Output()
  enviarFormularioEvent = new EventEmitter<NgForm>();

  arregloProvincias: Provincia[] = [];
  confirmacion: boolean = true;

  nombreFormulario: string;
  apellidoFormulario: string;
  emailFormulario: string;
  provinciaIdFormulario: number;
  contrasenaFormulario: string;
  contrasenaConfirmacionFormulario: string;
  perrosFormulario: number = 0;
  gatosFormulario: number = 0;
  ninosFormulario: number = 0;

  constructor(
    private readonly _provinciaService: ProvinciaService,
    private readonly _usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.provinciaIdFormulario = 0;
    const observableProvincias = this._provinciaService.getProvincias();
    observableProvincias
      .subscribe(
        (provincias: Provincia[]) => {
          this.arregloProvincias = provincias;
        },
        error => {
          console.error('Error obteniendo provincias', error);
        }
      );

    if (this.idUsuarioEditar) {
      this.llenarFormulario();
    }
  }

  enviarFormulario(formulario: NgForm) {
    this.enviarFormularioEvent.emit(formulario);
  }

  llenarFormulario() {
    const observableObtenerUsuario = this._usuarioService.getUsuario(this.idUsuarioEditar);
    observableObtenerUsuario
      .subscribe(
        (usuario: Usuario) => {
          this.nombreFormulario = usuario.nombre;
          this.apellidoFormulario = usuario.apellido;
          this.emailFormulario = usuario.email;
          this.provinciaIdFormulario = usuario.id_provincia.id;
          this.contrasenaFormulario = usuario.contrasena;
          this.contrasenaConfirmacionFormulario = usuario.contrasena;
          this.perrosFormulario = usuario.perros;
          this.gatosFormulario = usuario.gatos;
          this.ninosFormulario = usuario.ninos;
        },
        error => {
          console.error('Error obteniendo usuario', error);
        }
      );
    this.confirmarContrasena();
  }

  confirmarContrasena() {
    if (this.contrasenaConfirmacionFormulario === this.contrasenaFormulario) {
      this.confirmacion = false;
    } else {
      this.confirmacion = true;
    }
  }
}
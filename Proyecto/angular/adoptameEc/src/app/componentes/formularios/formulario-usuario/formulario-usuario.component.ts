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
  usuarioEditar: Usuario;

  @Output()
  enviarFormularioEvent: EventEmitter<Usuario> = new EventEmitter<Usuario>();

  arregloProvincias: Provincia[] = [];
  confirmacion: boolean = true;
  seleccion: boolean = true;

  nombreFormulario: string;
  apellidoFormulario: string;
  emailFormulario: string;
  provinciaIdFormulario: number = 0;
  contrasenaFormulario: string;
  contrasenaConfirmacionFormulario: string;
  perrosFormulario: number = 0;
  gatosFormulario: number = 0;
  ninosFormulario: number = 0;

  constructor(
    private readonly _provinciaService: ProvinciaService,
  ) { }

  ngOnInit(): void {
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

    if (this.usuarioEditar) {
      this.llenarFormulario();
    }
  }

  enviarFormulario(formulario: NgForm) {
    this.enviarFormularioEvent.emit(
      new Usuario(
        formulario.form.value.nombre,
        formulario.form.value.apellido,
        formulario.form.value.email,
        formulario.form.value.contrasena,
        formulario.form.value.perros,
        formulario.form.value.gatos,
        formulario.form.value.ninos,
        formulario.form.value.id_provincia
      )
    );
  }

  llenarFormulario() {
    this.nombreFormulario = this.usuarioEditar.nombre;
    this.apellidoFormulario = this.usuarioEditar.apellido;
    this.emailFormulario = this.usuarioEditar.email;
    this.provinciaIdFormulario = this.usuarioEditar.id_provincia.id;
    this.contrasenaFormulario = this.usuarioEditar.contrasena;
    this.contrasenaConfirmacionFormulario = this.usuarioEditar.contrasena;
    this.perrosFormulario = this.usuarioEditar.perros;
    this.gatosFormulario = this.usuarioEditar.gatos;
    this.ninosFormulario = this.usuarioEditar.ninos;

    this.confirmarContrasena();
    this.seleccionarOpcionProvincia();
  }

  seleccionarOpcionProvincia() {
    if (Number(this.provinciaIdFormulario) != 0) {
      this.seleccion = false;
    } else {
      this.seleccion = true;
    }
  }

  confirmarContrasena() {
    if (this.contrasenaConfirmacionFormulario === this.contrasenaFormulario) {
      this.confirmacion = false;
    } else {
      this.confirmacion = true;
    }
  }
}
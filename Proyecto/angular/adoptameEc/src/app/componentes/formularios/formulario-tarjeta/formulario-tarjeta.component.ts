import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tarjeta } from 'src/app/modelos/tarjeta';
import { Usuario } from 'src/app/modelos/usuario';
import { TarjetaService } from 'src/app/servicios/http/tarjeta.service';
import { UsuarioService } from 'src/app/servicios/http/usuario.service';

@Component({
  selector: 'app-formulario-tarjeta',
  templateUrl: './formulario-tarjeta.component.html',
  styleUrls: ['./formulario-tarjeta.component.css']
})
export class FormularioTarjetaComponent implements OnInit {

  @Input()
  tarjetaEditar: Tarjeta;

  @Output()
  enviarFormularioEvent: EventEmitter<Tarjeta> = new EventEmitter<Tarjeta>();

  arregloUsuarios: Usuario[] = [];
  seleccion: boolean = true;

  numeroFormulario: string;
  diaFormulario: number;
  anioFormulario: number;
  cvvFormulario: string;
  usuarioIdFormulario: number = 0;
  fechaCaducidadNuevaTarjeta: string;

  constructor(
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

    if (this.tarjetaEditar) {
      this.llenarFormulario();
    }
  }

  enviarFormulario(formulario: NgForm) {
    if (formulario.form.value.dia < 10) {
      this.fechaCaducidadNuevaTarjeta = '0' + String(formulario.form.value.dia) + '/' + String(formulario.form.value.anio);
    } else {
      this.fechaCaducidadNuevaTarjeta = String(formulario.form.value.dia) + '/' + String(formulario.form.value.anio);
    }

    this.enviarFormularioEvent.emit(
      new Tarjeta(
        formulario.form.value.numero,
        this.fechaCaducidadNuevaTarjeta,
        formulario.form.value.cvv,
        formulario.form.value.id_usuario
      )
    );
  }

  llenarFormulario() {
    this.numeroFormulario = this.tarjetaEditar.numero;
    this.diaFormulario = Number(this.tarjetaEditar.fechaCaducidad.substr(0, 2));
    this.anioFormulario = Number(this.tarjetaEditar.fechaCaducidad.substr(3));
    this.cvvFormulario = this.tarjetaEditar.cvv;
    this.usuarioIdFormulario = this.tarjetaEditar.id_usuario.id;

    this.seleccionarOpcionUsuario();
  }

  seleccionarOpcionUsuario() {
    if (Number(this.usuarioIdFormulario) != 0) {
      this.seleccion = false;
    } else {
      this.seleccion = true;
    }
  }
}
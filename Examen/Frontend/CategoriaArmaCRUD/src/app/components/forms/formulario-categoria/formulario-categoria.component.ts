import { Categoria } from './../../../models/categoria';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario-categoria',
  templateUrl: './formulario-categoria.component.html',
  styleUrls: ['./formulario-categoria.component.css']
})
export class FormularioCategoriaComponent implements OnInit {

  @Input()
  editar: Categoria;

  @Output()
  enviarFormularioEvent: EventEmitter<Categoria> = new EventEmitter<Categoria>();

  seleccion: boolean = true;

  nombreFormulario: string;
  descripcionFormulario: string;
  tipoFormulario: string;

  constructor() { }

  ngOnInit(): void {
    if (this.editar) {
      this.llenarFormulario();
    }
  }

  enviarFormulario(formulario: NgForm) {
    this.enviarFormularioEvent.emit(
      new Categoria(
        formulario.form.value.nombre,
        formulario.form.value.descripcion,
        formulario.form.value.tipo
      )
    );
  }

  llenarFormulario() {
    this.nombreFormulario = this.editar.nombre;
    this.descripcionFormulario = this.editar.descripcion;
    this.tipoFormulario = this.editar.tipo;

    this.seleccionarTipo();
  }

  seleccionarTipo() {
    if (this.tipoFormulario !== 'Default') {
      this.seleccion = false;
    } else {
      this.seleccion = true;
    }
  }
}

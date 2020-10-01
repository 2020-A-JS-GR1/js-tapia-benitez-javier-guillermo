import { Rol } from './../../../modelos/rol';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario-rol',
  templateUrl: './formulario-rol.component.html',
  styleUrls: ['./formulario-rol.component.css']
})
export class FormularioRolComponent implements OnInit {

  @Input()
  rolEditar: Rol;

  @Output()
  enviarFormularioEvent: EventEmitter<Rol> = new EventEmitter<Rol>();

  nombreFormulario: string;

  constructor() { }

  ngOnInit(): void {
    if (this.rolEditar) {
      this.llenarFormulario();
    }
  }

  enviarFormulario(formulario: NgForm) {
    this.enviarFormularioEvent.emit(
      new Rol(
        formulario.form.value.nombre
      )
    );
  }

  llenarFormulario() {
    this.nombreFormulario = this.rolEditar.nombre;
  }
}

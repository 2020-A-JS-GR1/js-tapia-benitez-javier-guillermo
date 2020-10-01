import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Especie } from 'src/app/modelos/especie';

@Component({
  selector: 'app-formulario-especie',
  templateUrl: './formulario-especie.component.html',
  styleUrls: ['./formulario-especie.component.css']
})
export class FormularioEspecieComponent implements OnInit {

  @Input()
  especieEditar: Especie;

  @Output()
  enviarFormularioEvent: EventEmitter<Especie> = new EventEmitter<Especie>();

  nombreFormulario: string;

  constructor() { }

  ngOnInit(): void {
    if (this.especieEditar) {
      this.llenarFormulario();
    }
  }

  enviarFormulario(formulario: NgForm) {
    this.enviarFormularioEvent.emit(
      new Especie(
        formulario.form.value.nombre
      )
    );
  }

  llenarFormulario() {
    this.nombreFormulario = this.especieEditar.nombre;
  }
}

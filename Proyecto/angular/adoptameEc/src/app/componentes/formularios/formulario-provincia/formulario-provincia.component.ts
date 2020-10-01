import { Provincia } from './../../../modelos/provincia';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProvinciaService } from 'src/app/servicios/http/provincia.service';

@Component({
  selector: 'app-formulario-provincia',
  templateUrl: './formulario-provincia.component.html',
  styleUrls: ['./formulario-provincia.component.css']
})
export class FormularioProvinciaComponent implements OnInit {

  @Input()
  provinciaEditar: Provincia;

  @Output()
  enviarFormularioEvent: EventEmitter<Provincia> = new EventEmitter<Provincia>();

  nombreFormulario: string;

  constructor() { }

  ngOnInit(): void {
    if (this.provinciaEditar) {
      this.llenarFormulario();
    }
  }

  enviarFormulario(formulario: NgForm) {
    this.enviarFormularioEvent.emit(
      new Provincia(
        formulario.form.value.nombre
      )
    );
  }

  llenarFormulario() {
    this.nombreFormulario = this.provinciaEditar.nombre;
  }
}

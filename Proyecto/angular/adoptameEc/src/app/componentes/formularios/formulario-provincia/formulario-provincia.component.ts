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
  idProvinciaEditar: number;

  @Output()
  enviarFormularioEvent = new EventEmitter<NgForm>();

  nombreFormulario: string;

  constructor(
    private readonly _provinciaService: ProvinciaService,
  ) { }

  ngOnInit(): void {
    if (this.idProvinciaEditar) {
      this.llenarFormulario();
    }
  }

  enviarFormulario(formulario: NgForm) {
    this.enviarFormularioEvent.emit(formulario);
  }

  llenarFormulario() {
    const observableObtenerProvincia = this._provinciaService.getProvincia(this.idProvinciaEditar);
    observableObtenerProvincia
      .subscribe(
        (provincia: Provincia) => {
          this.nombreFormulario = provincia.nombre;
        },
        error => {
          console.error('Error obteniendo provincia', error);
        }
      );
  }
}

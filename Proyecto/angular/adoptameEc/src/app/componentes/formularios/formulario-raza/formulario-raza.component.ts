import { Especie } from './../../../modelos/especie';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Raza } from 'src/app/modelos/raza';
import { EspecieService } from 'src/app/servicios/http/especie.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario-raza',
  templateUrl: './formulario-raza.component.html',
  styleUrls: ['./formulario-raza.component.css']
})
export class FormularioRazaComponent implements OnInit {

  @Input()
  razaEditar: Raza;

  @Output()
  enviarFormularioEvent: EventEmitter<Raza> = new EventEmitter<Raza>();

  arregloEspecies: Especie[] = [];

  seleccion: boolean = true;

  nombreFormulario: string;
  descripcionFormulario: string;
  especieIdFormulario: number = 0;

  constructor(
    private readonly _especieService: EspecieService,
  ) { }

  ngOnInit(): void {
    const observableEspecies = this._especieService.getEspecies();
    observableEspecies
      .subscribe(
        (especies: Especie[]) => {
          this.arregloEspecies = especies;
        },
        error => {
          console.error('Error obteniendo especies', error);
        }
      );

    if (this.razaEditar) {
      this.llenarFormulario();
    }
  }

  enviarFormulario(formulario: NgForm) {
    this.enviarFormularioEvent.emit(
      new Raza(
        formulario.form.value.nombre,
        formulario.form.value.descripcion,
        formulario.form.value.id_especie
      )
    );
  }

  llenarFormulario() {
    this.nombreFormulario = this.razaEditar.nombre;
    this.descripcionFormulario = this.razaEditar.descripcion;
    this.especieIdFormulario = this.razaEditar.id_especie.id;

    this.seleccionarOpcionEspecie();
  }

  seleccionarOpcionEspecie() {
    if (Number(this.especieIdFormulario) != 0) {
      this.seleccion = false;
    } else {
      this.seleccion = true;
    }
  }
}

import { Raza } from './../../../modelos/raza';
import { Mascota } from './../../../modelos/mascota';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RazaService } from 'src/app/servicios/http/raza.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario-mascota',
  templateUrl: './formulario-mascota.component.html',
  styleUrls: ['./formulario-mascota.component.css']
})
export class FormularioMascotaComponent implements OnInit {

  @Input()
  mascotaEditar: Mascota;

  @Output()
  enviarFormularioEvent: EventEmitter<Mascota> = new EventEmitter<Mascota>();

  arregloRazas: Raza[] = [];

  seleccionRaza: boolean = true;
  seleccionEdad: boolean = true;
  seleccionGenero: boolean = true;
  seleccionTamano: boolean = true;
  seleccionPelaje: boolean = true;
  seleccionVacuna: boolean = true;
  seleccionEsterilizacion: boolean = true;

  nombreFormulario: string;
  descripcionFormulario: string;
  edadFormulario: string = 'Default';
  generoFormulario: string = 'Default';
  tamanoFormulario: string = 'Default';
  pelajeFormulario: string = 'Default';
  vacunaFormulario: string = 'Default';
  esterilizacionFormulario: string = 'Default';
  razaIdFormulario: number = 0;

  constructor(
    private readonly _razaService: RazaService,
  ) { }

  ngOnInit(): void {
    const observableRazas = this._razaService.getRazas();
    observableRazas
      .subscribe(
        (razas: Raza[]) => {
          this.arregloRazas = razas;
        },
        error => {
          console.error('Error obteniendo razas', error);
        }
      );

    if (this.mascotaEditar) {
      this.llenarFormulario();
    }
  }

  enviarFormulario(formulario: NgForm) {
    this.enviarFormularioEvent.emit(
      new Mascota(
        formulario.form.value.nombre,
        formulario.form.value.edad,
        formulario.form.value.genero,
        formulario.form.value.tamano,
        formulario.form.value.descripcion,
        formulario.form.value.pelaje,
        formulario.form.value.vacuna,
        formulario.form.value.esterilizacion,
        formulario.form.value.id_raza
      )
    );
  }

  llenarFormulario() {
    this.nombreFormulario = this.mascotaEditar.nombre;
    this.descripcionFormulario = this.mascotaEditar.descripcion;
    this.edadFormulario = this.mascotaEditar.edad;
    this.generoFormulario = this.mascotaEditar.genero;
    this.tamanoFormulario = this.mascotaEditar.tamano;
    this.pelajeFormulario = this.mascotaEditar.pelaje;
    this.vacunaFormulario = this.mascotaEditar.vacuna;
    this.esterilizacionFormulario = this.mascotaEditar.esterilizacion;
    this.razaIdFormulario = this.mascotaEditar.id_raza.id;

    this.seleccionarOpcionEdad();
    this.seleccionarOpcionGenero();
    this.seleccionarOpcionTamano();
    this.seleccionarOpcionPelaje();
    this.seleccionarOpcionVacuna();
    this.seleccionarOpcionEsterilizacion();
    this.seleccionarOpcionRaza();
  }

  seleccionarOpcionEdad() {
    if (this.edadFormulario !== 'Default') {
      this.seleccionEdad = false;
    } else {
      this.seleccionEdad = true;
    }
  }

  seleccionarOpcionGenero() {
    if (this.generoFormulario !== 'Default') {
      this.seleccionGenero = false;
    } else {
      this.seleccionGenero = true;
    }
  }

  seleccionarOpcionTamano() {
    if (this.tamanoFormulario !== 'Default') {
      this.seleccionTamano = false;
    } else {
      this.seleccionTamano = true;
    }
  }

  seleccionarOpcionPelaje() {
    if (this.pelajeFormulario !== 'Default') {
      this.seleccionPelaje = false;
    } else {
      this.seleccionPelaje = true;
    }
  }

  seleccionarOpcionVacuna() {
    if (this.vacunaFormulario !== 'Default') {
      this.seleccionVacuna = false;
    } else {
      this.seleccionVacuna = true;
    }
  }

  seleccionarOpcionEsterilizacion() {
    if (this.esterilizacionFormulario !== 'Default') {
      this.seleccionEsterilizacion = false;
    } else {
      this.seleccionEsterilizacion = true;
    }
  }

  seleccionarOpcionRaza() {
    if (this.razaIdFormulario !== 0) {
      this.seleccionRaza = false;
    } else {
      this.seleccionRaza = true;
    }
  }
}

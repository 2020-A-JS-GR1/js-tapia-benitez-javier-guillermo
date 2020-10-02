import { Fotografia } from './../../../modelos/fotografia';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Mascota } from 'src/app/modelos/mascota';
import { MascotaService } from 'src/app/servicios/http/mascota.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario-fotografia',
  templateUrl: './formulario-fotografia.component.html',
  styleUrls: ['./formulario-fotografia.component.css']
})
export class FormularioFotografiaComponent implements OnInit {

  @Input()
  fotografiaEditar: Fotografia;

  @Output()
  enviarFormularioEvent: EventEmitter<Fotografia> = new EventEmitter<Fotografia>();

  arregloMascotas: Mascota[] = [];

  seleccion: boolean = true;

  locationUrl: string = 'assets/img/'

  urlFormulario: string;
  mascotaIdFormulario: number = 0;

  constructor(
    private readonly _mascotaService: MascotaService,
  ) { }

  ngOnInit(): void {
    const observableMascotas = this._mascotaService.getMascotas();
    observableMascotas
      .subscribe(
        (mascotas: Mascota[]) => {
          this.arregloMascotas = mascotas;
        },
        error => {
          console.error('Error obteniendo mascotas', error);
        }
      );

    if (this.fotografiaEditar) {
      this.llenarFormulario();
    }
  }

  enviarFormulario(formulario: NgForm) {
    this.enviarFormularioEvent.emit(
      new Fotografia(
        this.locationUrl + formulario.form.value.url,
        formulario.form.value.id_mascota
      )
    );
  }

  llenarFormulario() {
    const imagen = this.fotografiaEditar.url.split('/');
    this.urlFormulario = imagen[imagen.length - 1];
    this.mascotaIdFormulario = this.fotografiaEditar.id_mascota.id;

    this.seleccionarOpcionMascota();
  }

  seleccionarOpcionMascota() {
    if (Number(this.mascotaIdFormulario) != 0) {
      this.seleccion = false;
    } else {
      this.seleccion = true;
    }
  }
}

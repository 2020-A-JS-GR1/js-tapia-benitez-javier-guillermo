import { RefugioService } from './../../../servicios/http/refugio.service';
import { Mascota } from './../../../modelos/mascota';
import { RefugioMascota } from './../../../modelos/refugio-mascota';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Refugio } from 'src/app/modelos/refugio';
import { MascotaService } from 'src/app/servicios/http/mascota.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario-refugio-mascota',
  templateUrl: './formulario-refugio-mascota.component.html',
  styleUrls: ['./formulario-refugio-mascota.component.css']
})
export class FormularioRefugioMascotaComponent implements OnInit {

  @Input()
  refugioMascotaEditar: RefugioMascota;

  @Output()
  enviarFormularioEvent: EventEmitter<RefugioMascota> = new EventEmitter<RefugioMascota>();

  arregloRefugios: Refugio[] = [];
  arregloMascotas: Mascota[] = [];

  seleccionRefugio: boolean = true;
  seleccionMascota: boolean = true;

  refugioIdFormulario: number = 0;
  mascotaIdFormulario: number = 0;

  constructor(
    private readonly _refugioService: RefugioService,
    private readonly _mascotaService: MascotaService
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

    const observableRefugios = this._refugioService.getRefugios();
    observableRefugios
      .subscribe(
        (refugios: Refugio[]) => {
          this.arregloRefugios = refugios;
        },
        error => {
          console.error('Error obteniendo refugios', error);
        }
      );

    if (this.refugioMascotaEditar) {
      this.llenarFormulario();
    }
  }

  enviarFormulario(formulario: NgForm) {
    this.enviarFormularioEvent.emit(
      new RefugioMascota(
        formulario.form.value.id_refugio,
        formulario.form.value.id_mascota
      )
    );
  }

  llenarFormulario() {
    this.refugioIdFormulario = this.refugioMascotaEditar.id_refugio.id;
    this.mascotaIdFormulario = this.refugioMascotaEditar.id_mascota.id;

    this.seleccionarOpcionRefugio();
    this.seleccionarOpcionMascota();
  }

  seleccionarOpcionRefugio() {
    if (Number(this.refugioIdFormulario) != 0) {
      this.seleccionRefugio = false;
    } else {
      this.seleccionRefugio = true;
    }
  }

  seleccionarOpcionMascota() {
    if (Number(this.mascotaIdFormulario) != 0) {
      this.seleccionMascota = false;
    } else {
      this.seleccionMascota = true;
    }
  }
}

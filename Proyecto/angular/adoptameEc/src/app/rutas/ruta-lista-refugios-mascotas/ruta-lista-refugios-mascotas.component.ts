import { MascotaService } from './../../servicios/http/mascota.service';
import { RefugioService } from './../../servicios/http/refugio.service';
import { RefugioMascotaService } from './../../servicios/http/refugio-mascota.service';
import { Mascota } from './../../modelos/mascota';
import { RefugioMascota } from './../../modelos/refugio-mascota';
import { Component, OnInit } from '@angular/core';
import { Refugio } from 'src/app/modelos/refugio';

@Component({
  selector: 'app-ruta-lista-refugios-mascotas',
  templateUrl: './ruta-lista-refugios-mascotas.component.html',
  styleUrls: ['./ruta-lista-refugios-mascotas.component.css']
})
export class RutaListaRefugiosMascotasComponent implements OnInit {

  arregloRefugiosMascotas: RefugioMascota[] = [];
  arregloRefugios: Refugio[] = [];
  arregloMascotas: Mascota[] = [];

  constructor(
    private readonly _refugioMascotaService: RefugioMascotaService,
    private readonly _refugioService: RefugioService,
    private readonly _mascotaService: MascotaService
  ) { }

  ngOnInit(): void {
    const observableRefugiosMascotas = this._refugioMascotaService.getRefugiosMascotas();
    observableRefugiosMascotas
      .subscribe(
        (refugiosMascotas: RefugioMascota[]) => {
          this.arregloRefugiosMascotas = refugiosMascotas;
        },
        error => {
          console.error('Error', error);
        }
      );

    const observableRefugios = this._refugioService.getRefugios();
    observableRefugios
      .subscribe(
        (refugios: Refugio[]) => {
          this.arregloRefugios = refugios;
        },
        error => {
          console.error('Error', error);
        }
      );

    const observableMascotas = this._mascotaService.getMascotas();
    observableMascotas
      .subscribe(
        (mascotas: Mascota[]) => {
          this.arregloMascotas = mascotas;
        },
        error => {
          console.error('Error', error);
        }
      );
  }

  obtenerMascotaRefugio(id: number): string {
    const mascota = this.arregloMascotas.find(mascota => mascota.id === id);
    return mascota?.nombre;
  }

  obtenerRefugioMascota(id: number): string {
    const refugio = this.arregloRefugios.find(refugio => refugio.id === id);
    return refugio?.nombre;
  }
}

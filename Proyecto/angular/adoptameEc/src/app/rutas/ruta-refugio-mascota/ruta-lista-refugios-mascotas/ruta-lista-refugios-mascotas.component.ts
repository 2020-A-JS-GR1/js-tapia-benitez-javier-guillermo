import { MascotaService } from './../../../servicios/http/mascota.service';
import { RefugioService } from './../../../servicios/http/refugio.service';
import { RefugioMascotaService } from './../../../servicios/http/refugio-mascota.service';
import { Mascota } from './../../../modelos/mascota';
import { Refugio } from './../../../modelos/refugio';
import { RefugioMascota } from './../../../modelos/refugio-mascota';
import { Component, OnInit } from '@angular/core';

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
          console.error('Error obteniendo mascotas en refugios', error);
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
  }

  obtenerMascotaRefugio(id: number): string {
    const mascota = this.arregloMascotas.find(mascota => mascota.id === id);
    return mascota?.nombre;
  }

  obtenerRefugioMascota(id: number): string {
    const refugio = this.arregloRefugios.find(refugio => refugio.id === id);
    return refugio?.nombre;
  }

  eliminarRefugioMascota(idRefugioMascota: number) {
    const observableEliminarRefugioMascota = this._refugioMascotaService.deleteRefugioMascota(idRefugioMascota);
    observableEliminarRefugioMascota
      .subscribe(
        () => {
          const indice = this.arregloRefugiosMascotas.findIndex(refugioMascota => refugioMascota.id === idRefugioMascota);
          this.arregloRefugiosMascotas.splice(indice, 1);
        },
        error => {
          console.error('Error eliminando mascota del refugio', error);
        }
      );
  }
}

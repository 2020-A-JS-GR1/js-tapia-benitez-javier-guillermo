import { MascotaService } from './../../servicios/http/mascota.service';
import { FotografiaService } from './../../servicios/http/fotografia.service';
import { FotografiaMascotaService } from './../../servicios/http/fotografia-mascota.service';
import { Mascota } from './../../modelos/mascota';
import { Fotografia } from './../../modelos/fotografia'
import { FotografiaMascota } from './../../modelos/fotografia-mascota';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-lista-fotografias-mascotas',
  templateUrl: './ruta-lista-fotografias-mascotas.component.html',
  styleUrls: ['./ruta-lista-fotografias-mascotas.component.css']
})
export class RutaListaFotografiasMascotasComponent implements OnInit {

  arregloFotografiasMascotas: FotografiaMascota[] = [];
  arregloFotografias: Fotografia[] = [];
  arregloMascotas: Mascota[] = [];

  constructor(
    private readonly _fotografiaMascotaService: FotografiaMascotaService,
    private readonly _fotografiaService: FotografiaService,
    private readonly _mascotaService: MascotaService
  ) { }

  ngOnInit(): void {
    const observableFotografiasMascotas = this._fotografiaMascotaService.getFotografiasMascotas();
    observableFotografiasMascotas
      .subscribe(
        (fotografiasMascotas: FotografiaMascota[]) => {
          this.arregloFotografiasMascotas = fotografiasMascotas;
        },
        error => {
          console.error('Error', error);
        }
      );

    const observableFotografias = this._fotografiaService.getFotografias();
    observableFotografias
      .subscribe(
        (fotografias: Fotografia[]) => {
          this.arregloFotografias = fotografias;
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

  obtenerFotografiaMascota(id: number): string {
    const fotografia = this.arregloFotografias.find(fotografia => fotografia.id === id);
    return fotografia?.url;
  }

  obtenerMascotaFotografia(id: number): string {
    const mascota = this.arregloMascotas.find(mascota => mascota.id === id);
    return mascota?.nombre;
  }
}

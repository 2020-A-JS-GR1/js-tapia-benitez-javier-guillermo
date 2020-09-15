import { RazaService } from './../../servicios/http/raza.service';
import { MascotaService } from './../../servicios/http/mascota.service';
import { Raza } from './../../modelos/raza';
import { Mascota } from './../../modelos/mascota';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-lista-mascotas',
  templateUrl: './ruta-lista-mascotas.component.html',
  styleUrls: ['./ruta-lista-mascotas.component.css']
})
export class RutaListaMascotasComponent implements OnInit {

  arregloMascotas: Mascota[] = [];
  arregloRazas: Raza[] = [];

  constructor(
    private readonly _mascotaService: MascotaService,
    private readonly _razaService: RazaService
  ) { }

  ngOnInit(): void {
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

    const observableRazas = this._razaService.getRazas();
    observableRazas
      .subscribe(
        (razas: Raza[]) => {
          this.arregloRazas = razas;
        },
        error => {
          console.error('Error', error);
        }
      );
  }

  obtenerRazaMascota(id: number): string {
    const raza = this.arregloRazas.find(raza => raza.id === id);
    return raza?.nombre;
  }
}

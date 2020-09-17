import { MascotaService } from '../../../servicios/http/mascota.service';
import { FotografiaService } from '../../../servicios/http/fotografia.service';
import { Mascota } from '../../../modelos/mascota';
import { Fotografia } from '../../../modelos/fotografia';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-lista-fotografias',
  templateUrl: './ruta-lista-fotografias.component.html',
  styleUrls: ['./ruta-lista-fotografias.component.css']
})
export class RutaListaFotografiasComponent implements OnInit {

  arregloFotografias: Fotografia[] = [];
  arregloMascotas: Mascota[] = [];

  constructor(
    private readonly _fotografiaService: FotografiaService,
    private readonly _mascotaService: MascotaService
  ) { }

  ngOnInit(): void {
    const observableFotografias = this._fotografiaService.getFotografias();
    observableFotografias
      .subscribe(
        (fotografias: Fotografia[]) => {
          this.arregloFotografias = fotografias;
        },
        error => {
          console.error('Error obteniendo fotografias', error);
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

  obtenerMascotaFotografia(id: number): string {
    const mascota = this.arregloMascotas.find(mascota => mascota.id === id);
    return mascota?.nombre;
  }

  eliminarFotografia(idFotografia: number) {
    const observableEliminarFotografia = this._fotografiaService.deleteFotografia(idFotografia);
    observableEliminarFotografia
      .subscribe(
        () => {
          const indice = this.arregloFotografias.findIndex(fotografia => fotografia.id === idFotografia);
          this.arregloFotografias.splice(indice, 1);
        },
        error => {
          console.error('Error eliminando fotografia', error);
        }
      );
  }
}

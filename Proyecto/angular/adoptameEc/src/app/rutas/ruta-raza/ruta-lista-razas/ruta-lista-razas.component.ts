import { EspecieService } from './../../../servicios/http/especie.service';
import { RazaService } from './../../../servicios/http/raza.service';
import { Especie } from './../../../modelos/especie';
import { Raza } from './../../../modelos/raza';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-lista-razas',
  templateUrl: './ruta-lista-razas.component.html',
  styleUrls: ['./ruta-lista-razas.component.css']
})
export class RutaListaRazasComponent implements OnInit {

  arregloRazas: Raza[] = [];
  arregloEspecies: Especie[] = [];

  constructor(
    private readonly _razaService: RazaService,
    private readonly _especieService: EspecieService
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
  }

  obtenerEspecieRaza(id: number): string {
    const especie = this.arregloEspecies.find(especie => especie.id === id);
    return especie?.nombre;
  }

  eliminarRaza(idRaza: number) {
    const observableEliminarRaza = this._razaService.deleteRaza(idRaza);
    observableEliminarRaza
      .subscribe(
        () => {
          const indice = this.arregloRazas.findIndex(raza => raza.id === idRaza);
          this.arregloRazas.splice(indice, 1);
        },
        error => {
          console.error('Error eliminando raza', error);
        }
      );
  }
}

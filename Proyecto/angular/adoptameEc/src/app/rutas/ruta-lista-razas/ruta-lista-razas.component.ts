import { EspecieService } from './../../servicios/http/especie.service';
import { RazaService } from './../../servicios/http/raza.service';
import { Especie } from './../../modelos/especie';
import { Raza } from './../../modelos/raza';
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
          console.error('Error', error);
        }
      );

    const observableEspecies = this._especieService.getEspecies();
    observableEspecies
      .subscribe(
        (especies: Especie[]) => {
          this.arregloEspecies = especies;
        },
        error => {
          console.error('Error', error);
        }
      );
  }

  obtenerEspecieRaza(id: number): string {
    const especie = this.arregloEspecies.find(especie => especie.id === id);
    return especie?.nombre;
  }
}

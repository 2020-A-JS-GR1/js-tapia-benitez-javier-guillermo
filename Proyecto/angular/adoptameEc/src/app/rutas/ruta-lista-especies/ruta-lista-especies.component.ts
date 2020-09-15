import { EspecieService } from './../../servicios/http/especie.service';
import { Especie } from './../../modelos/especie';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-lista-especies',
  templateUrl: './ruta-lista-especies.component.html',
  styleUrls: ['./ruta-lista-especies.component.css']
})
export class RutaListaEspeciesComponent implements OnInit {

  arregloEspecies: Especie[] = [];

  constructor(
    private readonly _especieService: EspecieService
  ) { }

  ngOnInit(): void {
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

}

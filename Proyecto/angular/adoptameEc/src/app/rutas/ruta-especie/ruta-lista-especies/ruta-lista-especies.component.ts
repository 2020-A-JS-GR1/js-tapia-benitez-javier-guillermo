import { EspecieService } from './../../../servicios/http/especie.service';
import { Especie } from './../../../modelos/especie';
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
          console.error('Error obteniendo especies', error);
        }
      );
  }

  eliminarEspecie(idEspecie: number) {
    const observableEliminarEspecie = this._especieService.deleteEspecie(idEspecie);
    observableEliminarEspecie
      .subscribe(
        () => {
          const indice = this.arregloEspecies.findIndex(especie => especie.id === idEspecie);
          this.arregloEspecies.splice(indice, 1);
        },
        error => {
          console.error('Error eliminando especie', error);
        }
      );
  }
}

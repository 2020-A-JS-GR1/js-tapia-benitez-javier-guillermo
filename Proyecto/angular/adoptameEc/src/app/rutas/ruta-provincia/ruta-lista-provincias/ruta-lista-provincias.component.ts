import { ProvinciaService } from './../../../servicios/http/provincia.service';
import { Provincia } from './../../../modelos/provincia';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-lista-provincias',
  templateUrl: './ruta-lista-provincias.component.html',
  styleUrls: ['./ruta-lista-provincias.component.css']
})
export class RutaListaProvinciasComponent implements OnInit {

  arregloProvincias: Provincia[] = [];

  constructor(
    private readonly _provinciaService: ProvinciaService
  ) { }

  ngOnInit(): void {
    const observableProvincias = this._provinciaService.getProvincias();
    observableProvincias
      .subscribe(
        (provincias: Provincia[]) => {
          this.arregloProvincias = provincias;
        },
        error => {
          console.error('Error obteniendo provincias', error);
        }
      );
  }

  eliminarProvincia(idProvincia: number) {
    const observableEliminarProvincia = this._provinciaService.deleteProvincia(idProvincia);
    observableEliminarProvincia
      .subscribe(
        () => {
          const indice = this.arregloProvincias.findIndex(provincia => provincia.id === idProvincia);
          this.arregloProvincias.splice(indice, 1);
        },
        error => {
          console.error('Error eliminando provincia', error);
        }
      );
  }
}

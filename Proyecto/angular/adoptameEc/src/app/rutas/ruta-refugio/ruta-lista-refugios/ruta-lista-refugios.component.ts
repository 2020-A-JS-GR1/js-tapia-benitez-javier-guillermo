import { ProvinciaService } from './../../../servicios/http/provincia.service';
import { RefugioService } from './../../../servicios/http/refugio.service';
import { Provincia } from './../../../modelos/provincia';
import { Refugio } from './../../../modelos/refugio';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-lista-refugios',
  templateUrl: './ruta-lista-refugios.component.html',
  styleUrls: ['./ruta-lista-refugios.component.css']
})
export class RutaListaRefugiosComponent implements OnInit {

  arregloRefugios: Refugio[] = [];
  arregloProvincias: Provincia[] = [];

  constructor(
    private readonly _refugioService: RefugioService,
    private readonly _provinciaService: ProvinciaService
  ) { }

  ngOnInit(): void {
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

  obtenerProvinciaRefugio(id: number): string {
    const provincia = this.arregloProvincias.find(provincia => provincia.id === id);
    return provincia?.nombre;
  }

  eliminarRefugio(idRefugio: number) {
    const observableEliminarRefugio = this._refugioService.deleteRefugio(idRefugio);
    observableEliminarRefugio
      .subscribe(
        () => {
          const indice = this.arregloRefugios.findIndex(refugio => refugio.id === idRefugio);
          this.arregloRefugios.splice(indice, 1);
        },
        error => {
          console.error('Error eliminando refugio', error);
        }
      );
  }
}

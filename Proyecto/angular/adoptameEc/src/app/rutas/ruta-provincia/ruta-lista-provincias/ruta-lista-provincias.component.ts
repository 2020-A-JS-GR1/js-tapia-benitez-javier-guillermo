import { ProvinciaService } from './../../../servicios/http/provincia.service';
import { Provincia } from './../../../modelos/provincia';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-ruta-lista-provincias',
  templateUrl: './ruta-lista-provincias.component.html',
  styleUrls: ['./ruta-lista-provincias.component.css']
})
export class RutaListaProvinciasComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  columnas: string[] = ['nombre', "acciones"];

  arregloProvincias: Provincia[] = [];

  dataSource = new MatTableDataSource<Provincia>();

  constructor(
    private readonly _provinciaService: ProvinciaService
  ) { }

  ngOnInit(): void {
    const observableProvincias = this._provinciaService.getProvincias();
    observableProvincias
      .subscribe(
        (provincias: Provincia[]) => {
          this.arregloProvincias = provincias;
          this.dataSource.data = this.arregloProvincias;
        },
        error => {
          console.error('Error obteniendo provincias', error);
        }
      );

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  filtrarProvincia(busqueda: string) {
    this.dataSource.filter = busqueda.trim().toLowerCase();
  }

  eliminarProvincia(idProvincia: number) {
    const observableEliminarProvincia = this._provinciaService.deleteProvincia(idProvincia);
    observableEliminarProvincia
      .subscribe(
        () => {
          const indice = this.arregloProvincias.findIndex(provincia => provincia.id === idProvincia);
          this.arregloProvincias.splice(indice, 1);
          this.dataSource.data = this.arregloProvincias;
        },
        error => {
          console.error('Error eliminando provincia', error);
        }
      );
  }
}

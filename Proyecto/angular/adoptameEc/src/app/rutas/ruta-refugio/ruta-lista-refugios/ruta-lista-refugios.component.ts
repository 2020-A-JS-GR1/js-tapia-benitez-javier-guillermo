import { MatPaginator } from '@angular/material/paginator';
import { RefugioService } from './../../../servicios/http/refugio.service';
import { Refugio } from './../../../modelos/refugio';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-ruta-lista-refugios',
  templateUrl: './ruta-lista-refugios.component.html',
  styleUrls: ['./ruta-lista-refugios.component.css']
})
export class RutaListaRefugiosComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  columnas: string[] = ['nombre', 'direccion', 'provincia', "acciones"];

  arregloRefugios: Refugio[] = [];

  dataSource = new MatTableDataSource<Refugio>();

  constructor(
    private readonly _refugioService: RefugioService
  ) { }

  ngOnInit(): void {
    const observableRefugios = this._refugioService.getRefugios();
    observableRefugios
      .subscribe(
        (refugios: Refugio[]) => {
          this.arregloRefugios = refugios;
          this.dataSource.data = this.arregloRefugios;
        },
        error => {
          console.error('Error obteniendo refugios', error);
        }
      );

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  filtrarRefugio(busqueda: string) {
    this.dataSource.filter = busqueda.trim().toLowerCase();
  }

  eliminarRefugio(idRefugio: number) {
    const observableEliminarRefugio = this._refugioService.deleteRefugio(idRefugio);
    observableEliminarRefugio
      .subscribe(
        () => {
          const indice = this.arregloRefugios.findIndex(refugio => refugio.id === idRefugio);
          this.arregloRefugios.splice(indice, 1);
          this.dataSource.data = this.arregloRefugios;
        },
        error => {
          console.error('Error eliminando refugio', error);
        }
      );
  }
}

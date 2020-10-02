import { MascotaService } from '../../../servicios/http/mascota.service';
import { FotografiaService } from '../../../servicios/http/fotografia.service';
import { Mascota } from '../../../modelos/mascota';
import { Fotografia } from '../../../modelos/fotografia';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-ruta-lista-fotografias',
  templateUrl: './ruta-lista-fotografias.component.html',
  styleUrls: ['./ruta-lista-fotografias.component.css']
})
export class RutaListaFotografiasComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  columnas: string[] = ['imagen', 'mascota', "acciones"];

  arregloFotografias: Fotografia[] = [];

  dataSource = new MatTableDataSource<Fotografia>();

  constructor(
    private readonly _fotografiaService: FotografiaService
  ) { }

  ngOnInit(): void {
    const observableFotografias = this._fotografiaService.getFotografias();
    observableFotografias
      .subscribe(
        (fotografias: Fotografia[]) => {
          this.arregloFotografias = fotografias;
          this.dataSource.data = this.arregloFotografias;
        },
        error => {
          console.error('Error obteniendo fotografias', error);
        }
      );

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  filtrarFotografia(busqueda: string) {
    this.dataSource.filter = busqueda.trim().toLowerCase();
  }

  eliminarFotografia(idFotografia: number) {
    const observableEliminarFotografia = this._fotografiaService.deleteFotografia(idFotografia);
    observableEliminarFotografia
      .subscribe(
        () => {
          const indice = this.arregloFotografias.findIndex(fotografia => fotografia.id === idFotografia);
          this.arregloFotografias.splice(indice, 1);
          this.dataSource.data = this.arregloFotografias;
        },
        error => {
          console.error('Error eliminando fotografia', error);
        }
      );
  }
}

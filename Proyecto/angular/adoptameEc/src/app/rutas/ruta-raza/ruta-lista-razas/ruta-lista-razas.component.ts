import { MatSort } from '@angular/material/sort';
import { EspecieService } from './../../../servicios/http/especie.service';
import { RazaService } from './../../../servicios/http/raza.service';
import { Especie } from './../../../modelos/especie';
import { Raza } from './../../../modelos/raza';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-ruta-lista-razas',
  templateUrl: './ruta-lista-razas.component.html',
  styleUrls: ['./ruta-lista-razas.component.css']
})
export class RutaListaRazasComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  columnas: string[] = ['nombre', 'descripcion', 'especie', "acciones"];

  arregloRazas: Raza[] = [];

  dataSource = new MatTableDataSource<Raza>();

  constructor(
    private readonly _razaService: RazaService
  ) { }

  ngOnInit(): void {
    const observableRazas = this._razaService.getRazas();
    observableRazas
      .subscribe(
        (razas: Raza[]) => {
          this.arregloRazas = razas;
          this.dataSource.data = this.arregloRazas;
        },
        error => {
          console.error('Error obteniendo razas', error);
        }
      );

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  filtrarRaza(busqueda: string) {
    this.dataSource.filter = busqueda.trim().toLowerCase();
  }

  eliminarRaza(idRaza: number) {
    const observableEliminarRaza = this._razaService.deleteRaza(idRaza);
    observableEliminarRaza
      .subscribe(
        () => {
          const indice = this.arregloRazas.findIndex(raza => raza.id === idRaza);
          this.arregloRazas.splice(indice, 1);
          this.dataSource.data = this.arregloRazas;
        },
        error => {
          console.error('Error eliminando raza', error);
        }
      );
  }
}

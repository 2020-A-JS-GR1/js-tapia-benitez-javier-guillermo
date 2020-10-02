import { MatSort } from '@angular/material/sort';
import { AdopcionService } from './../../../servicios/http/adopcion.service';
import { Adopcion } from './../../../modelos/adopcion';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-ruta-lista-peticiones',
  templateUrl: './ruta-lista-peticiones.component.html',
  styleUrls: ['./ruta-lista-peticiones.component.css']
})
export class RutaListaPeticionesComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  columnas: string[] = ['usuario', 'mascota', 'calificacion', 'fecha', 'estado'];

  arregloAdopciones: Adopcion[] = [];

  dataSource = new MatTableDataSource<Adopcion>();

  constructor(
    private readonly _adopcionService: AdopcionService
  ) { }

  ngOnInit(): void {
    const observableAdopciones = this._adopcionService.getAdopciones();
    observableAdopciones
      .subscribe(
        (adopciones: Adopcion[]) => {
          this.arregloAdopciones = adopciones;
          this.dataSource.data = this.arregloAdopciones;
        },
        error => {
          console.error('Error obteniendo adopciones', error);
        }
      );

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  convertirFecha(fecha: number): string {
    const fechaDonacion: Date = new Date(fecha);
    return fechaDonacion.toUTCString();
  }

  filtrarAdopcion(busqueda: string) {
    this.dataSource.filter = busqueda.trim().toLowerCase();
  }
}

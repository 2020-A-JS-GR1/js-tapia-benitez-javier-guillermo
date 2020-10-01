import { RazaService } from './../../../servicios/http/raza.service';
import { MascotaService } from './../../../servicios/http/mascota.service';
import { Raza } from './../../../modelos/raza';
import { Mascota } from './../../../modelos/mascota';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-ruta-lista-mascotas',
  templateUrl: './ruta-lista-mascotas.component.html',
  styleUrls: ['./ruta-lista-mascotas.component.css']
})
export class RutaListaMascotasComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  columnas: string[] = ['nombre', 'raza', 'edad', 'genero', 'tamano', 'pelaje', 'vacuna', 'esterilizacion', "acciones"];

  arregloMascotas: Mascota[] = [];

  dataSource = new MatTableDataSource<Mascota>();

  constructor(
    private readonly _mascotaService: MascotaService
  ) { }

  ngOnInit(): void {
    const observableMascotas = this._mascotaService.getMascotas();
    observableMascotas
      .subscribe(
        (mascotas: Mascota[]) => {
          this.arregloMascotas = mascotas;
          this.dataSource.data = this.arregloMascotas;
        },
        error => {
          console.error('Error obteniendo mascotas', error);
        }
      );

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  filtrarMascota(busqueda: string) {
    this.dataSource.filter = busqueda.trim().toLowerCase();
  }

  eliminarMascota(idMascota: number) {
    const observableEliminarMascota = this._mascotaService.deleteMascota(idMascota);
    observableEliminarMascota
      .subscribe(
        () => {
          const indice = this.arregloMascotas.findIndex(mascota => mascota.id === idMascota);
          this.arregloMascotas.splice(indice, 1);
          this.dataSource.data = this.arregloMascotas;
        },
        error => {
          console.error('Error eliminando mascota', error);
        }
      );
  }
}

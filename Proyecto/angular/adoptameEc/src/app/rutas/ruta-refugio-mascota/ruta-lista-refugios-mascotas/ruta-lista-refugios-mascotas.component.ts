import { MascotaService } from './../../../servicios/http/mascota.service';
import { RefugioService } from './../../../servicios/http/refugio.service';
import { RefugioMascotaService } from './../../../servicios/http/refugio-mascota.service';
import { Mascota } from './../../../modelos/mascota';
import { Refugio } from './../../../modelos/refugio';
import { RefugioMascota } from './../../../modelos/refugio-mascota';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-ruta-lista-refugios-mascotas',
  templateUrl: './ruta-lista-refugios-mascotas.component.html',
  styleUrls: ['./ruta-lista-refugios-mascotas.component.css']
})
export class RutaListaRefugiosMascotasComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  columnas: string[] = ['refugio', 'direccion', "mascota", "acciones"];

  arregloRefugiosMascotas: RefugioMascota[] = [];

  dataSource = new MatTableDataSource<RefugioMascota>();

  constructor(
    private readonly _refugioMascotaService: RefugioMascotaService,
  ) { }

  ngOnInit(): void {
    const observableRefugiosMascotas = this._refugioMascotaService.getRefugiosMascotas();
    observableRefugiosMascotas
      .subscribe(
        (refugiosMascotas: RefugioMascota[]) => {
          this.arregloRefugiosMascotas = refugiosMascotas;
          this.dataSource.data = this.arregloRefugiosMascotas;
        },
        error => {
          console.error('Error obteniendo mascotas en refugios', error);
        }
      );

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  filtrarRefugioMascota(busqueda: string) {
    this.dataSource.filter = busqueda.trim().toLowerCase();
  }

  eliminarRefugioMascota(idRefugioMascota: number) {
    const observableEliminarRefugioMascota = this._refugioMascotaService.deleteRefugioMascota(idRefugioMascota);
    observableEliminarRefugioMascota
      .subscribe(
        () => {
          const indice = this.arregloRefugiosMascotas.findIndex(refugioMascota => refugioMascota.id === idRefugioMascota);
          this.arregloRefugiosMascotas.splice(indice, 1);
          this.dataSource.data = this.arregloRefugiosMascotas;
        },
        error => {
          console.error('Error eliminando mascota del refugio', error);
        }
      );
  }
}

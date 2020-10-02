import { MascotaService } from './../../../servicios/http/mascota.service';
import { MatSort } from '@angular/material/sort';
import { AdopcionService } from './../../../servicios/http/adopcion.service';
import { Adopcion } from './../../../modelos/adopcion';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-ruta-lista-peticiones-pendientes',
  templateUrl: './ruta-lista-peticiones-pendientes.component.html',
  styleUrls: ['./ruta-lista-peticiones-pendientes.component.css']
})
export class RutaListaPeticionesPendientesComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  columnas: string[] = ['usuario', 'mascota', 'calificacion', 'fecha', 'acciones'];

  arregloAdopciones: Adopcion[] = [];
  peticion: Adopcion;

  dataSource = new MatTableDataSource<Adopcion>();

  constructor(
    private readonly _adopcionService: AdopcionService,
    private readonly _mascotaService: MascotaService
  ) { }

  ngOnInit(): void {
    this.obtenerPeticiones();

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  obtenerPeticiones() {
    const observableAdopciones = this._adopcionService.getAdopciones();
    observableAdopciones
      .subscribe(
        (adopciones: Adopcion[]) => {
          this.arregloAdopciones = adopciones;
          this.dataSource.data = this.filtrarPendientes();
        },
        error => {
          console.error('Error obteniendo adopciones', error);
        }
      );
  }

  convertirFecha(fecha: number): string {
    const fechaDonacion: Date = new Date(fecha);
    return fechaDonacion.toUTCString();
  }

  filtrarAdopcion(busqueda: string) {
    this.dataSource.filter = busqueda.trim().toLowerCase();
  }

  filtrarPendientes(): Adopcion[] {
    return this.arregloAdopciones.filter(adopcion => adopcion.estado === 'Pendiente');
  }

  aceptarPeticion(id: number) {
    const observableObtenerAdopcion = this._adopcionService.getAdopcion(id);
    observableObtenerAdopcion
      .subscribe(
        (adopcion: Adopcion) => {
          this.peticion = adopcion;
          this.peticion.estado = 'Aprovada';
          this.peticion.id_usuario = adopcion.id_usuario.id;
          this.peticion.id_mascota = adopcion.id_mascota.id;

          const observablePeticionAprovada = this._adopcionService.updateAdopcion(id, this.peticion);
          observablePeticionAprovada
            .subscribe(
              (adopcionAprovada: Adopcion) => {
                console.log('Solicitud aprovada', adopcionAprovada);
                this.obtenerPeticiones();
                // const observableBorrarMascota = this._mascotaService.deleteMascota(adopcionAprovada.id_mascota.id);
                // observableBorrarMascota
                //   .subscribe(
                //     () => {
                //       console.log('Mascota adoptada Felicidades');
                //     },
                //     error => {
                //       console.error('Error al adoptar mascota', error);
                //     }
                //   );
              },
              error => {
                console.error('Error aprovando adopcion', error);
              }
            );
        },
        error => {
          console.error('Error obteniendo peticion', error);
        }
      );
  }

  rechazarPeticion(id: number) {
    const observableObtenerAdopcion = this._adopcionService.getAdopcion(id);
    observableObtenerAdopcion
      .subscribe(
        (adopcion: Adopcion) => {
          this.peticion = adopcion;
          this.peticion.estado = 'Rechazada';
          this.peticion.id_usuario = adopcion.id_usuario.id;
          this.peticion.id_mascota = adopcion.id_mascota.id;

          const observablePeticionRechazada = this._adopcionService.updateAdopcion(id, this.peticion);
          observablePeticionRechazada
            .subscribe(
              (adopcionRechazada: Adopcion) => {
                console.log('Solicitud rechazada: ', adopcionRechazada);
                this.obtenerPeticiones();
              },
              error => {
                console.error('Error actualizando peticion', error);
              }
            );
        },
        error => {
          console.error('Error obteniendo peticion', error);
        }
      );
  }
}

import { MascotaService } from './../../../servicios/http/mascota.service';
import { UsuarioService } from './../../../servicios/http/usuario.service';
import { AdopcionService } from './../../../servicios/http/adopcion.service';
import { Mascota } from './../../../modelos/mascota';
import { Usuario } from './../../../modelos/usuario';
import { Adopcion } from './../../../modelos/adopcion';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-lista-peticiones',
  templateUrl: './ruta-lista-peticiones.component.html',
  styleUrls: ['./ruta-lista-peticiones.component.css']
})
export class RutaListaPeticionesComponent implements OnInit {

  arregloAdopciones: Adopcion[] = [];
  arregloUsuarios: Usuario[] = [];
  arregloMascotas: Mascota[] = [];

  constructor(
    private readonly _adopcionService: AdopcionService,
    private readonly _usuarioService: UsuarioService,
    private readonly _mascotaService: MascotaService
  ) { }

  ngOnInit(): void {
    const observableAdopciones = this._adopcionService.getAdopciones();
    observableAdopciones
      .subscribe(
        (adopciones: Adopcion[]) => {
          this.arregloAdopciones = adopciones;
        },
        error => {
          console.error('Error obteniendo adopciones', error);
        }
      );

    const observableMascotas = this._mascotaService.getMascotas();
    observableMascotas
      .subscribe(
        (mascotas: Mascota[]) => {
          this.arregloMascotas = mascotas;
        },
        error => {
          console.error('Error obteniendo mascotas', error);
        }
      );

    const observableUsuarios = this._usuarioService.getUsuarios();
    observableUsuarios
      .subscribe(
        (usuarios: Usuario[]) => {
          this.arregloUsuarios = usuarios;
        },
        error => {
          console.error('Error obteniendo usuarios', error);
        }
      );
  }

  obtenerUsuarioAdopcion(id: number): string {
    const usuario = this.arregloUsuarios.find(usuario => usuario.id === id);
    return usuario?.nombre + ' ' + usuario?.apellido;
  }

  obtenerMascotaAdopcion(id: number): string {
    const mascota = this.arregloMascotas.find(mascota => mascota.id === id);
    return mascota?.nombre;
  }

  eliminarAdopcion(idAdopcion: number) {
    const observableEliminarAdopcion = this._adopcionService.deleteAdopcion(idAdopcion);
    observableEliminarAdopcion
      .subscribe(
        () => {
          const indice = this.arregloAdopciones.findIndex(adopcion => adopcion.id === idAdopcion);
          this.arregloAdopciones.splice(indice, 1);
        },
        error => {
          console.error('Error eliminando peticion de adopcion', error);
        }
      );
  }
}

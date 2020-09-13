import { DonacionService } from './../../servicios/http/donacion.service';
import { MascotaService } from './../../servicios/http/mascota.service';
import { UsuarioService } from './../../servicios/http/usuario.service';
import { AdopcionService } from './../../servicios/http/adopcion.service';
import { Donacion } from './../../modelos/donacion';
import { Mascota } from './../../modelos/mascota';
import { Usuario } from './../../modelos/usuario';
import { Adopcion } from './../../modelos/adopcion';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-estadisticas',
  templateUrl: './ruta-estadisticas.component.html',
  styleUrls: ['./ruta-estadisticas.component.css']
})
export class RutaEstadisticasComponent implements OnInit {

  arregloAdopciones = [];
  arregloUsuarios = [];
  arregloMascotas = [];
  arregloDonaciones = [];

  pendientes: number = 0;
  usuarios: number = 0;
  mascotas: number = 0 ;
  total: number = 0;

  urlBanner = '../../../assets/img/banner-administrador.jpg';

  constructor(
    private readonly _adopcionService: AdopcionService,
    private readonly _usuarioService: UsuarioService,
    private readonly _mascotaService: MascotaService,
    private readonly _donacionService: DonacionService
  ) { }

  ngOnInit(): void {
    const observableAdopciones = this._adopcionService.getAdopciones();
    observableAdopciones
      .subscribe(
        (adopciones: Adopcion[]) => {
          this.arregloAdopciones = adopciones;
          this.arregloAdopciones
            .forEach(
              adopcion => {
                if (adopcion.estado === 'Pendiente') {
                  this.pendientes++;
                }
              }
            );
        },
        error => {
          console.error('Error', error);
        }
      );
    const observableUsuarios = this._usuarioService.getUsuarios();
    observableUsuarios
      .subscribe(
        (usuarios: Usuario[]) => {
          this.arregloUsuarios = usuarios;
          this.usuarios = this.arregloUsuarios.length;
        },
        error => {
          console.error('Error', error);
        }
      );
    const observableMascotas = this._mascotaService.getMascotas();
    observableMascotas
      .subscribe(
        (mascotas: Mascota[]) => {
          this.arregloMascotas = mascotas;
          this.mascotas = this.arregloMascotas.length;
        },
        error => {
          console.error('Error', error);
        }
      );
    const observableDonaciones = this._donacionService.getDonaciones();
    observableDonaciones
      .subscribe(
        (donaciones: Donacion[]) => {
          this.arregloDonaciones = donaciones;
          this.total = this.arregloDonaciones
            .reduce(
              (total, donacion) => {
                return total + donacion.valor;
              }, 0
            );
        },
        error => {
          console.error('Error', error);
        }
      );
  }
}

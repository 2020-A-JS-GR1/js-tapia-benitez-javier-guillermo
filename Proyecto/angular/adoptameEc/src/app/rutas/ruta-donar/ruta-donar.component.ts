import { DonacionService } from './../../servicios/http/donacion.service';
import { Donacion } from './../../modelos/donacion';
import { TarjetaService } from './../../servicios/http/tarjeta.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fotografia } from 'src/app/modelos/fotografia';
import { Mascota } from 'src/app/modelos/mascota';
import { FotografiaService } from 'src/app/servicios/http/fotografia.service';
import { MascotaService } from 'src/app/servicios/http/mascota.service';
import { UsuarioService } from 'src/app/servicios/http/usuario.service';
import { SesionService } from 'src/app/servicios/sesion.service';
import { Tarjeta } from 'src/app/modelos/tarjeta';

@Component({
  selector: 'app-ruta-donar',
  templateUrl: './ruta-donar.component.html',
  styleUrls: ['./ruta-donar.component.css']
})
export class RutaDonarComponent implements OnInit {

  arregloMascotas: Mascota[] = [];
  arregloFotografias: Fotografia[] = [];
  arregloTarjetas: Tarjeta[] = [];

  sesion: boolean;
  usuarioId: number;

  tarjetaDonacion: number = 0;
  valorDonacion: number = 0;

  constructor(
    private readonly _mascotaService: MascotaService,
    private readonly _tarjetaService: TarjetaService,
    private readonly _fotografiaService: FotografiaService,
    private readonly _donacionService: DonacionService,
    private _sesionService: SesionService,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
    this._sesionService.seleccionarSesion.subscribe(sesion => this.sesion = sesion);
    this._sesionService.seleccionarSesionUsuario.subscribe(usuario => this.usuarioId = usuario);

    const observableMascotas = this._mascotaService.getMascotas();
    observableMascotas
      .subscribe(
        (mascotas: Mascota[]) => {
          this.arregloMascotas = mascotas.filter(mascota => (mascota.vacuna === 'No' || mascota.esterilizacion === 'No'));
        },
        error => {
          console.error('Error obteniendo mascotas', error);
        }
      );

    const observableObtenerFotografias = this._fotografiaService.getFotografias();
    observableObtenerFotografias
      .subscribe(
        (fotografias: Fotografia[]) => {
          this.arregloFotografias = fotografias;
        },
        error => {
          console.error('Error obteniendo fotografias', error);
        }
      );

    const observableTarjetas = this._tarjetaService.getTarjetas();
    observableTarjetas
      .subscribe(
        (tarjetas: Tarjeta[]) => {
          this.arregloTarjetas = tarjetas.filter(tarjeta => tarjeta.id_usuario.id === this.usuarioId);
        },
        error => {
          console.error('Error obteniendo tarjetas', error);
        }
      );
  }

  crearDonar(id: number) {
    if (this.sesion) {
      const donacionNueva = new Donacion(
        this.valorDonacion,
        Date.now(),
        this.tarjetaDonacion,
        id
      );
      const observableCrearDonacion = this._donacionService.createDonacion(donacionNueva);
      observableCrearDonacion
        .subscribe(
          () => {
            console.log('Donacion enviada', donacionNueva);
            alert('Donacion enviada');
          },
          error => {
            console.error('Error enviando peticion', error);
          }
        );
    } else {
      const rutaLogin = ['/login'];
      this._router.navigate(rutaLogin);
    }
  }

  obtenerFotografia(id: number): string {
    const fotoMascota = this.arregloFotografias.find(fotografia => fotografia.id_mascota.id === id);
    return fotoMascota.url;
  }
}

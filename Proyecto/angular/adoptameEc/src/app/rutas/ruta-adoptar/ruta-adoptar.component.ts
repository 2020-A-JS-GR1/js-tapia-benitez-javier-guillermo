import { Fotografia } from './../../modelos/fotografia';
import { FotografiaService } from './../../servicios/http/fotografia.service';
import { AdopcionService } from './../../servicios/http/adopcion.service';
import { Usuario } from './../../modelos/usuario';
import { UsuarioService } from './../../servicios/http/usuario.service';
import { Router } from '@angular/router';
import { SesionService } from 'src/app/servicios/sesion.service';
import { MascotaService } from './../../servicios/http/mascota.service';
import { Mascota } from './../../modelos/mascota';
import { Component, OnInit } from '@angular/core';
import { Adopcion } from 'src/app/modelos/adopcion';

@Component({
  selector: 'app-ruta-adoptar',
  templateUrl: './ruta-adoptar.component.html',
  styleUrls: ['./ruta-adoptar.component.css']
})
export class RutaAdoptarComponent implements OnInit {

  arregloMascotas: Mascota[] = [];
  arregloFotografias: Fotografia[] = [];

  sesion: boolean;
  usuarioId: number;

  constructor(
    private readonly _mascotaService: MascotaService,
    private readonly _usuarioService: UsuarioService,
    private readonly _adopcionService: AdopcionService,
    private readonly _fotografiaService: FotografiaService,
    private _sesionService: SesionService,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
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

    this._sesionService.seleccionarSesion.subscribe(sesion => this.sesion = sesion);
    this._sesionService.seleccionarSesionUsuario.subscribe(usuario => this.usuarioId = usuario);
  }

  crearAdopcion(id: number) {
    if (this.sesion) {
      const observableObtenerUsuario = this._usuarioService.getUsuario(this.usuarioId);
      observableObtenerUsuario
        .subscribe(
          (usuario: Usuario) => {
            const solicitudAdopcion = new Adopcion(
              'Pendiente',
              10 - (usuario.perros*0.5) - (usuario.gatos*0.5) - usuario.ninos,
              Date.now(),
              usuario.id,
              id
            )
            const observableCrearAdopcion = this._adopcionService.createAdopcion(solicitudAdopcion);
            observableCrearAdopcion
              .subscribe(
                () => {
                  console.log('Solicitud enviada', solicitudAdopcion);
                  alert('Solicitud de adopcion enviada');
                },
                error => {
                  console.error('Error enviando peticion', error);
                }
              );
          },
          error => {
            console.error('Error obteniendo informacion del usuario', error);
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

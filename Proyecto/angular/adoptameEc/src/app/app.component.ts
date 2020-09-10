import { Adopcion } from './modelos/adopcion';
import { AdopcionService } from './servicios/http/adopcion.service';
import { Donacion } from './modelos/donacion';
import { DonacionService } from './servicios/http/donacion.service';
import { Especie } from './modelos/especie';
import { EspecieService } from './servicios/http/especie.service';
import { FotografiaMascota } from './modelos/fotografia-mascota';
import { FotografiaMascotaService } from './servicios/http/fotografia-mascota.service';
import { Fotografia } from './modelos/fotografia';
import { FotografiaService } from './servicios/http/fotografia.service';
import { Mascota } from './modelos/mascota';
import { MascotaService } from './servicios/http/mascota.service';
import { Provincia } from './modelos/provincia';
import { ProvinciaService } from './servicios/http/provincia.service';
import { Raza } from './modelos/raza';
import { RazaService } from './servicios/http/raza.service';
import { RefugioMascota } from './modelos/refugio-mascota';
import { RefugioMascotaService } from './servicios/http/refugio-mascota.service';
import { Refugio } from './modelos/refugio';
import { RefugioService } from './servicios/http/refugio.service';
import { RolUsuario } from './modelos/rol-usuario';
import { RolUsuarioService } from './servicios/http/rol-usuario.service';
import { Rol } from './modelos/rol';
import { RolService } from './servicios/http/rol.service';
import { Tarjeta } from './modelos/tarjeta';
import { TarjetaService } from './servicios/http/tarjeta.service';
import { Usuario } from './modelos/usuario';
import { UsuarioService } from './servicios/http/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title: string = 'adoptameEc';

  public arregloAdopciones = [];
  public arregloDonaciones = [];
  public arregloEspecies = [];
  public arregloFotografiasMascotas = [];
  public arregloFotografias = [];
  public arregloMascotas = [];
  public arregloProvincias = [];
  public arregloRazas = [];
  public arregloRefugiosMascotas = [];
  public arregloRefugios = [];
  public arregloRolesUsuarios = [];
  public arregloRoles = [];
  public arregloTarjetas = [];
  public arregloUsuarios = [];

  constructor(
    private readonly _adopcionService: AdopcionService,
    private readonly _donacionService: DonacionService,
    private readonly _especieService: EspecieService,
    private readonly _fotografiaMascotaService: FotografiaMascotaService,
    private readonly _fotografiaService: FotografiaService,
    private readonly _mascotaService: MascotaService,
    private readonly _provinciaService: ProvinciaService,
    private readonly _razaService: RazaService,
    private readonly _refugioMascotaService: RefugioMascotaService,
    private readonly _refugioService: RefugioService,
    private readonly _rolUsuarioService: RolUsuarioService,
    private readonly _rolService: RolService,
    private readonly _tarjetaService: TarjetaService,
    private readonly _usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.obtenerAdopciones();
    this.obtenerDonaciones();
    this.obtenerEspecies();
    this.obtenerFotografiasMascotas();
    this.obtenerFotografias();
    this.obtenerMascotas();
    this.obtenerProvincias();
    this.obtenerRazas();
    this.obtenerRefugiosMascotas();
    this.obtenerRefugios();
    this.obtenerRolesUsuarios();
    this.obtenerRoles();
    this.obtenerTarjetas();
    this.obtenerUsuarios();
  }

  obtenerAdopciones() {
    const obsObtenerAdopciones = this._adopcionService.getAdopciones();
    obsObtenerAdopciones
    .subscribe(
      (data: Object) => {
        this.arregloAdopciones = data as Adopcion[];
        console.log(this.arregloAdopciones);
      },
      error => {
        console.error(error);
      }
    );
  }

  obtenerDonaciones() {
    const obsObtenerDonaciones = this._donacionService.getDonaciones();
    obsObtenerDonaciones
    .subscribe(
      (data: Object) => {
        this.arregloDonaciones = data as Donacion[];
        console.log(this.arregloDonaciones);
      },
      error => {
        console.error(error);
      }
    );
  }

  obtenerEspecies() {
    const obsObtenerEspecies = this._especieService.getEspecies();
    obsObtenerEspecies
    .subscribe(
      (data: Object) => {
        this.arregloEspecies = data as Especie[];
        console.log(this.arregloEspecies);
      },
      error => {
        console.error(error);
      }
    );
  }

  obtenerFotografiasMascotas() {
    const obsObtenerFotografiasMascotas = this._fotografiaMascotaService.getFotografiasMascotas();
    obsObtenerFotografiasMascotas
    .subscribe(
      (data: Object) => {
        this.arregloFotografiasMascotas = data as FotografiaMascota[];
        console.log(this.arregloFotografiasMascotas);
      },
      error => {
        console.error(error);
      }
    );
  }

  obtenerFotografias() {
    const obsObtenerFotografias = this._fotografiaService.getFotografias();
    obsObtenerFotografias
      .subscribe(
        (data: Object) => {
          this.arregloFotografias = data as Fotografia[];
          console.log(this.arregloFotografias);
        },
        error => {
          console.error(error);
        }
      );
  }

  obtenerMascotas() {
    const obsObtenerMascotas = this._mascotaService.getMascotas();
    obsObtenerMascotas
      .subscribe(
        (data: Object) => {
          this.arregloMascotas = data as Mascota[];
          console.log(this.arregloMascotas);
        },
        error => {
          console.error(error);
        }
      );
  }

  obtenerProvincias() {
    const obsObtenerProvincias = this._provinciaService.getProvincias();
    obsObtenerProvincias
      .subscribe(
        (data: Object) => {
          this.arregloProvincias = data as Provincia[];
          console.log(this.arregloProvincias);
        },
        error => {
          console.error(error);
        }
      );
  }

  obtenerRazas() {
    const obsObtenerRazas = this._razaService.getRazas();
    obsObtenerRazas
      .subscribe(
        (data: Object) => {
          this.arregloRazas = data as Raza[];
          console.log(this.arregloRazas);
        },
        error => {
          console.error(error);
        }
      );
  }

  obtenerRefugiosMascotas() {
    const obsObtenerRefugiosMascotas = this._refugioMascotaService.getRefugiosMascotas();
    obsObtenerRefugiosMascotas
      .subscribe(
        (data: Object) => {
          this.arregloRefugiosMascotas = data as RefugioMascota[];
          console.log(this.arregloRefugiosMascotas);
        },
        error => {
          console.error(error);
        }
      );
  }

  obtenerRefugios() {
    const obsObtenerRefugios = this._refugioService.getRefugios();
    obsObtenerRefugios
      .subscribe(
        (data: Object) => {
          this.arregloRefugios = data as Refugio[];
          console.log(this.arregloRefugios);
        },
        error => {
          console.error(error);
        }
      );
  }

  obtenerRolesUsuarios() {
    const obsObtenerRolesUsuarios = this._rolUsuarioService.getRolesUsuarios();
    obsObtenerRolesUsuarios
      .subscribe(
        (data: Object) => {
          this.arregloRolesUsuarios = data as RolUsuario[];
          console.log(this.arregloRolesUsuarios);
        },
        error => {
          console.error(error);
        }
      );
  }

  obtenerRoles() {
    const obsObtenerRoles = this._rolService.getRoles();
    obsObtenerRoles
      .subscribe(
        (data: Object) => {
          this.arregloRoles = data as Rol[];
          console.log(this.arregloRoles);
        },
        error => {
          console.error(error);
        }
      );
  }

  obtenerTarjetas() {
    const obsObtenerTarjetas = this._tarjetaService.getTarjetas();
    obsObtenerTarjetas
      .subscribe(
        (data: Object) => {
          this.arregloTarjetas = data as Tarjeta[];
          console.log(this.arregloTarjetas);
        },
        error => {
          console.error(error);
        }
      );
  }

  obtenerUsuarios() {
    const obsObtenerUsuarios = this._usuarioService.getUsuarios();
    obsObtenerUsuarios
      .subscribe(
        (data: Object) => {
          this.arregloUsuarios = data as Usuario[];
          console.log(this.arregloUsuarios);
        },
        error => {
          console.error(error);
        }
      );
  }
}

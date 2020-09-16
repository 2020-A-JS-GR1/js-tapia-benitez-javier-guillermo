import { UsuarioService } from './../../../servicios/http/usuario.service';
import { MascotaService } from './../../../servicios/http/mascota.service';
import { TarjetaService } from './../../../servicios/http/tarjeta.service';
import { DonacionService } from './../../../servicios/http/donacion.service';
import { Usuario } from './../../../modelos/usuario';
import { Mascota } from './../../../modelos/mascota';
import { Tarjeta } from './../../../modelos/tarjeta';
import { Donacion } from './../../../modelos/donacion';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-lista-donaciones',
  templateUrl: './ruta-lista-donaciones.component.html',
  styleUrls: ['./ruta-lista-donaciones.component.css']
})
export class RutaListaDonacionesComponent implements OnInit {

  arregloDonaciones: Donacion[] = [];
  arregloTarjetas: Tarjeta[] = [];
  arregloMascotas: Mascota[] = [];
  arregloUsuarios: Usuario[] = [];

  constructor(
    private readonly _donacionService: DonacionService,
    private readonly _tarjetaService: TarjetaService,
    private readonly _mascotaService: MascotaService,
    private readonly _usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    const observableDonaciones = this._donacionService.getDonaciones();
    observableDonaciones
      .subscribe(
        (donaciones: Donacion[]) => {
          this.arregloDonaciones = donaciones;
        },
        error => {
          console.error('Error obteniendo donaciones', error);
        }
      );

    const observableTarjetas = this._tarjetaService.getTarjetas();
    observableTarjetas
      .subscribe(
        (tarjetas: Tarjeta[]) => {
          this.arregloTarjetas = tarjetas;
        },
        error => {
          console.error('Error obteniendo tarjetas', error);
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

  obtenerMascotaDonacion(id: number): string {
    const mascota = this.arregloMascotas.find(mascota => mascota.id === id);
    return mascota?.nombre;
  }

  obtenerUsuarioTarjetaDonacion(id: number): string {
    const tarjeta = this.arregloTarjetas.find(tarjeta => tarjeta.id === id);
    const usuario = this.arregloUsuarios.find(usuario => usuario.id === tarjeta.id);
    return usuario?.nombre + ' ' +usuario?.apellido;
  }

  obtenerTarjetaDonacion(id: number): string {
    const tarjeta = this.arregloTarjetas.find(tarjeta => tarjeta.id === id);
    return tarjeta?.numero;
  }

  eliminarDonacion(idDonacion: number) {
    const observableEliminarDonacion = this._donacionService.deleteDonacion(idDonacion);
    observableEliminarDonacion
      .subscribe(
        () => {
          const indice = this.arregloDonaciones.findIndex(donacion => donacion.id === idDonacion);
          this.arregloDonaciones.splice(indice, 1);
        },
        error => {
          console.error('Error eliminando donacion', error);
        }
      );
  }
}

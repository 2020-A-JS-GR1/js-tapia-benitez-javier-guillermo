import { UsuarioService } from './../../servicios/http/usuario.service';
import { TarjetaService } from './../../servicios/http/tarjeta.service';
import { Usuario } from './../../modelos/usuario';
import { Tarjeta } from './../../modelos/tarjeta';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-lista-tarjetas',
  templateUrl: './ruta-lista-tarjetas.component.html',
  styleUrls: ['./ruta-lista-tarjetas.component.css']
})
export class RutaListaTarjetasComponent implements OnInit {

  arregloTarjetas: Tarjeta[] = [];
  arregloUsuarios: Usuario[] = [];

  constructor(
    private readonly _tarjetaService: TarjetaService,
    private readonly _usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    const observableTarjetas = this._tarjetaService.getTarjetas();
    observableTarjetas
    .subscribe(
      (tarjetas: Tarjeta[]) => {
        this.arregloTarjetas = tarjetas;
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
        },
        error => {
          console.error('Error', error);
        }
      );
  }

  obtenerPropietarioTarjeta(id: number): string {
    const propietario = this.arregloUsuarios.find(usuario => usuario.id === id);
    return propietario?.nombre + ' ' + propietario?.apellido;
  }
}

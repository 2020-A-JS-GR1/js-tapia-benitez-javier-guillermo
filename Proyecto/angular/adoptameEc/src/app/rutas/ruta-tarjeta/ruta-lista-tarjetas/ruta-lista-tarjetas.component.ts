import { UsuarioService } from './../../../servicios/http/usuario.service';
import { TarjetaService } from './../../../servicios/http/tarjeta.service';
import { Tarjeta } from './../../../modelos/tarjeta';
import { Usuario } from './../../../modelos/usuario';
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
          console.error('Error obteniendo tarjetas', error);
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

  obtenerPropietarioTarjeta(id: number): string {
    const propietario = this.arregloUsuarios.find(usuario => usuario.id === id);
    return propietario?.nombre + ' ' + propietario?.apellido;
  }

  eliminarTarjeta(idTarjeta: number) {
    const observableEliminarTarjeta = this._tarjetaService.deleteTarjeta(idTarjeta);
    observableEliminarTarjeta
      .subscribe(
        () => {
          const indice = this.arregloTarjetas.findIndex(tarjeta => tarjeta.id === idTarjeta);
          this.arregloTarjetas.splice(indice, 1);
        },
        error => {
          console.error('Error eliminando tarjeta', error);
        }
      );
  }
}
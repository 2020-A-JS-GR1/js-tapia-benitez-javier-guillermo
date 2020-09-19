import { Global } from './../global';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tarjeta } from 'src/app/modelos/tarjeta';

@Injectable()
export class TarjetaService {
  public url: string = Global.url;

  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  getTarjetas() {
    return this._httpClient.get(this.url + '/Tarjeta');
  }

  getTarjeta(idTarjeta: number) {
    return this._httpClient.get(this.url + '/Tarjeta/' + idTarjeta);
  }

  createTarjeta(tarjeta: Tarjeta) {
    return this._httpClient.post(this.url + '/Tarjeta', tarjeta);
  }

  deleteTarjeta(idTarjeta: number) {
    return this._httpClient.delete(this.url + '/Tarjeta/' + idTarjeta);
  }

  updateTarjeta(idTarjeta: number, tarjeta: Tarjeta) {
    return this._httpClient.put(this.url + '/Tarjeta/' + idTarjeta, tarjeta);
  }
}

import { Global } from './../global';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TarjetaService {
  public url: string = Global.url;

  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  getTarjetas() {
    return this._httpClient.get(this.url + '/Tarjeta');
  }
}

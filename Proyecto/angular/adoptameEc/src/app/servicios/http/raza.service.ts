import { Raza } from './../../modelos/raza';
import { HttpClient } from '@angular/common/http';
import { Global } from './../global';
import { Injectable } from '@angular/core';

@Injectable()
export class RazaService {
  public url: string = Global.url;

  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  getRazas() {
    return this._httpClient.get(this.url + '/Raza');
  }

  getRaza(idRaza: number) {
    return this._httpClient.get(this.url + '/Raza/' + idRaza);
  }

  createRaza(raza: Raza) {
    return this._httpClient.post(this.url + '/Raza', raza);
  }

  deleteRaza(idRaza: number) {
    return this._httpClient.delete(this.url + '/Raza/' + idRaza);
  }
}

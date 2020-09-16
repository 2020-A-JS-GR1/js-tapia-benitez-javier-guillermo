import { Adopcion } from './../../modelos/adopcion';
import { HttpClient } from '@angular/common/http';
import { Global } from './../global';
import { Injectable } from '@angular/core';

@Injectable()
export class AdopcionService {
  public url: string = Global.url;

  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  getAdopciones() {
    return this._httpClient.get(this.url + '/Adopcion');
  }

  getAdopcion(idAdopcion: number) {
    return this._httpClient.get(this.url + '/Adopcion/' + idAdopcion);
  }

  createAdopcion(adopcion: Adopcion) {
    return this._httpClient.post(this.url + '/Adopcion', adopcion);
  }

  deleteAdopcion(idAdopcion: number) {
    return this._httpClient.delete(this.url + '/Adopcion/' + idAdopcion);
  }
}

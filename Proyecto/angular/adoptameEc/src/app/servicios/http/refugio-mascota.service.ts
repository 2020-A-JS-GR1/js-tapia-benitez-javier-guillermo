import { RefugioMascota } from './../../modelos/refugio-mascota';
import { HttpClient } from '@angular/common/http';
import { Global } from './../global';
import { Injectable } from '@angular/core';

@Injectable()
export class RefugioMascotaService {
  public url: string = Global.url;

  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  getRefugiosMascotas() {
    return this._httpClient.get(this.url + '/RefugioMascota');
  }

  getRefugioMascota(idRefugioMascota: number) {
    return this._httpClient.get(this.url + '/RefugioMascota/' + idRefugioMascota);
  }

  createRefugioMascota(refugioMascota: RefugioMascota) {
    return this._httpClient.post(this.url + '/RefugioMascota', refugioMascota);
  }

  deleteRefugioMascota(idRefugioMascota: number) {
    return this._httpClient.delete(this.url + '/RefugioMascota/' + idRefugioMascota);
  }
}

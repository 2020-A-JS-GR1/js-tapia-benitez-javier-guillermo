import { FotografiaMascota } from './../../modelos/fotografia-mascota';
import { HttpClient } from '@angular/common/http';
import { Global } from './../global';
import { Injectable } from '@angular/core';

@Injectable()
export class FotografiaMascotaService {
  public url: string = Global.url;

  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  getFotografiasMascotas() {
    return this._httpClient.get(this.url + '/FotografiaMascota');
  }

  getFotografiaMascota(idFotografiaMascota: number) {
    return this._httpClient.get(this.url + '/FotografiaMascota/' + idFotografiaMascota);
  }

  createFotografiaMascota(fotografiaMascota: FotografiaMascota) {
    return this._httpClient.post(this.url + '/FotografiaMascota', fotografiaMascota);
  }

  deleteFotografiaMascota(idFotografiaMascota: number) {
    return this._httpClient.delete(this.url + '/FotografiaMascota/' + idFotografiaMascota);
  }
}

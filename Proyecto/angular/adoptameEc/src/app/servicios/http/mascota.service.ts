import { Mascota } from './../../modelos/mascota';
import { HttpClient } from '@angular/common/http';
import { Global } from './../global';
import { Injectable } from '@angular/core';

@Injectable()
export class MascotaService {
  public url: string = Global.url;

  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  getMascotas() {
    return this._httpClient.get(this.url + '/Mascota');
  }

  getMascota(idMascota: number) {
    return this._httpClient.get(this.url + '/Mascota/' + idMascota);
  }

  createMascota(mascota: Mascota) {
    return this._httpClient.post(this.url + '/Mascota', mascota);
  }

  deleteMascota(idMascota: number) {
    return this._httpClient.delete(this.url + '/Mascota/' + idMascota);
  }
}

import { Provincia } from './../../modelos/provincia';
import { HttpClient } from '@angular/common/http';
import { Global } from './../global';
import { Injectable } from '@angular/core';

@Injectable()
export class ProvinciaService {
  public url: string = Global.url;

  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  getProvincias() {
    return this._httpClient.get(this.url + '/Provincia');
  }

  getProvincia(idProvincia: number) {
    return this._httpClient.get(this.url + '/Provincia/' + idProvincia);
  }

  createProvincia(provincia: Provincia) {
    return this._httpClient.post(this.url + '/Provincia', provincia);
  }

  deleteProvincia(idProvincia: number) { 
    return this._httpClient.delete(this.url + '/Provincia/' + idProvincia);
  }
}

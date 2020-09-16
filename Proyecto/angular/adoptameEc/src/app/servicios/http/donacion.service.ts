import { Donacion } from './../../modelos/donacion';
import { HttpClient } from '@angular/common/http';
import { Global } from './../global';
import { Injectable } from '@angular/core';

@Injectable()
export class DonacionService {
  public url: string = Global.url;

  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  getDonaciones() {
    return this._httpClient.get(this.url + '/Donacion');
  }

  getDonacion(idDonacion: number) {
    return this._httpClient.get(this.url + '/Donacion/' + idDonacion);
  }

  createDonacion(donacion: Donacion) {
    return this._httpClient.post(this.url + '/Donacion', donacion);
  }

  deleteDonacion(idDonacion: number) {
    return this._httpClient.delete(this.url + '/Donacion/' + idDonacion);
  }
}

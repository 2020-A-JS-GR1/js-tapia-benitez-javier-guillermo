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
}

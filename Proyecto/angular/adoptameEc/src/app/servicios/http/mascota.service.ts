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
}

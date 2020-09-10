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
}

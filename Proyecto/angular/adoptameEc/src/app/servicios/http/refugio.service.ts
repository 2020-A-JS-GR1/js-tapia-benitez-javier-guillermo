import { Refugio } from './../../modelos/refugio';
import { HttpClient } from '@angular/common/http';
import { Global } from './../global';
import { Injectable } from '@angular/core';

@Injectable()
export class RefugioService {
  public url: string = Global.url;
  
  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  getRefugios() {
    return this._httpClient.get(this.url + '/Refugio');
  }

  getRefugio(idRefugio: number) {
    return this._httpClient.get(this.url + '/Refugio/' + idRefugio);
  }

  createRefugio(refugio: Refugio) {
    return this._httpClient.post(this.url + '/Refugio', refugio);
  }

  deleteRefugio(idRefugio: number) {
    return this._httpClient.delete(this.url + '/Refugio/' + idRefugio);
  }

  updateRefugio(idRefugio: number, refugio: Refugio) {
    return this._httpClient.put(this.url + '/Refugio/' + idRefugio, refugio);
  }
}

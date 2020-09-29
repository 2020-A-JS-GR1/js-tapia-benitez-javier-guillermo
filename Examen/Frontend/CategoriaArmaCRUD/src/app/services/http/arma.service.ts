import { Arma } from './../../models/arma';
import { Global } from './../global';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArmaService {

  url: string = Global.url;

  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  get() {
    return this._httpClient.get(this.url + '/Arma');
  }

  getById(id: string) {
    return this._httpClient.get(this.url + '/Arma/' + id);
  }

  add(arma: Arma) {
    return this._httpClient.post(this.url + '/Arma', arma);
  }

  update(id: string, arma: Arma) {
    return this._httpClient.put(this.url + '/Arma/' + id, arma);
  }

  delete(id: string) {
    return this._httpClient.delete(this.url + '/Arma/' + id);
  }
}

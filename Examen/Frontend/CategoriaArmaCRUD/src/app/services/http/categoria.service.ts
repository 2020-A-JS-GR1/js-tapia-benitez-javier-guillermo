import { Categoria } from './../../models/categoria';
import { HttpClient } from '@angular/common/http';
import { Global } from './../global';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  url: string = Global.url;

  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  get() {
    return this._httpClient.get(this.url + '/Categoria');
  }

  getById(id: string) {
    return this._httpClient.get(this.url + '/Categoria/' + id);
  }

  add(categoria: Categoria) {
    return this._httpClient.post(this.url + '/Categoria', categoria);
  }

  update(id: string, categoria: Categoria) {
    return this._httpClient.put(this.url + '/Categoria/' + id, categoria);
  }

  delete(id: string) {
    return this._httpClient.delete(this.url + '/Categoria/' + id);
  }
}

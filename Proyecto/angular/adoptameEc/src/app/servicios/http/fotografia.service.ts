import { Fotografia } from './../../modelos/fotografia';
import { HttpClient } from '@angular/common/http';
import { Global } from './../global';
import { Injectable } from '@angular/core';

@Injectable()
export class FotografiaService {
  public url: string = Global.url;

  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  getFotografias() {
    return this._httpClient.get(this.url + '/Fotografia');
  }

  getFotografia(idFotografia: number) {
    return this._httpClient.get(this.url + '/Fotografia/' + idFotografia);
  }

  createFotografia(fotografia: Fotografia) {
    return this._httpClient.post(this.url + '/Fotografia', fotografia);
  }

  deleteFotografia(idFotografia: number) {
    return this._httpClient.delete(this.url + '/Fotografia/' + idFotografia);
  }

  updateFotografia(idFotografia: number, fotografia: Fotografia) {
    return this._httpClient.put(this.url + '/Fotografia/' + idFotografia, fotografia);
  }
}

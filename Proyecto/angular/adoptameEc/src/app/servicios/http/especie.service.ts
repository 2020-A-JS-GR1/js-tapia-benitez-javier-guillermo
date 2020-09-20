import { Especie } from './../../modelos/especie';
import { HttpClient } from '@angular/common/http';
import { Global } from './../global';
import { Injectable } from '@angular/core';

@Injectable()
export class EspecieService {
  public url: string = Global.url;

  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  getEspecies() {
    return this._httpClient.get(this.url + '/Especie');
  }

  getEspecie(idEspecie: number) {
    return this._httpClient.get(this.url + '/Especie/' + idEspecie);
  }

  createEspecie(especie: Especie) {
    return this._httpClient.post(this.url + '/Especie', especie);
  }

  deleteEspecie(idEspecie: number) {
    return this._httpClient.delete(this.url + '/Especie/' + idEspecie);
  }

  updateEspecie(idEspecie: number, especie: Especie) {
    return this._httpClient.put(this.url + '/Especie/' + idEspecie, especie);
  }
}

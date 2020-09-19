import { Rol } from './../../modelos/rol';
import { HttpClient } from '@angular/common/http';
import { Global } from './../global';
import { Injectable } from '@angular/core';

@Injectable()
export class RolService {
  public url: string = Global.url;

  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  getRoles() {
    return this._httpClient.get(this.url + '/Rol');
  }

  getRol(idRol: number) {
    return this._httpClient.get(this.url + '/Rol/' + idRol);
  }

  createRol(rol: Rol) {
    return this._httpClient.post(this.url + '/Rol', rol);
  }

  deleteRol(idRol: number) {
    return this._httpClient.delete(this.url + '/Rol/' + idRol);
  }

  updateRol(idRol: number, rol: Rol) {
    return this._httpClient.put(this.url + '/Rol/' + idRol, rol);
  }
}

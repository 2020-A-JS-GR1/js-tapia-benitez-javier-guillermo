import { RolUsuario } from './../../modelos/rol-usuario';
import { HttpClient } from '@angular/common/http';
import { Global } from './../global';
import { Injectable } from '@angular/core';

@Injectable()
export class RolUsuarioService {
  public url: string = Global.url;

  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  getRolesUsuarios() {
    return this._httpClient.get(this.url + '/RolUsuario');
  }

  getRolUsuario(idRolUsuario:  number) {
    return this._httpClient.get(this.url + '/RolUsuario/' + idRolUsuario);
  }

  createRolUsuario(rolUsuario: RolUsuario) {
    return this._httpClient.post(this.url + '/RolUsuario', rolUsuario);
  }

  deleteRolUsuario(idRolUsuario: number) {
    return this._httpClient.delete(this.url + '/RolUsuario/' + idRolUsuario);
  }

  updateRolUsuario(idRolUsuario: number, rolUsuario: RolUsuario) {
    return this._httpClient.put(this.url + '/RolUsuario/' + idRolUsuario, rolUsuario);
  }
}

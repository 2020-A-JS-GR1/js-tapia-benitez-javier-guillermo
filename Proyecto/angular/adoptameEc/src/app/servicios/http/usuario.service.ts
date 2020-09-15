import { Usuario } from './../../modelos/usuario';
import { HttpClient } from '@angular/common/http';
import { Global } from './../global';
import { Injectable } from '@angular/core';

@Injectable()
export class UsuarioService {
  public url: string = Global.url;

  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  getUsuarios() {
    return this._httpClient.get(this.url + '/Usuario');
  }

  getUsuario(idUsuario: number) {
    return this._httpClient.get(this.url + '/Usuario/' + idUsuario);
  }

  createUsuario(usuario: Usuario) {
    return this._httpClient.post(this.url + '/Usuario', usuario);
  }

  deleteUsuario(idUsuario: number) {
    return this._httpClient.delete(this.url + '/Usuario/' + idUsuario);
  }
}

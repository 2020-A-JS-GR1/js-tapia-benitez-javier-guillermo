import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  private sesion = new BehaviorSubject<boolean>(false);
  private sesionUsuario = new BehaviorSubject<number>(0);
  private rol = new BehaviorSubject<boolean>(false);

  public seleccionarSesion = this.sesion.asObservable();
  public seleccionarSesionUsuario = this.sesionUsuario.asObservable();
  public seleccionarRol = this.rol.asObservable();

  constructor() { }

  public cambiarSesion(estado: boolean) {
    this.sesion.next(estado);
  }

  public cambiarSesionUsuario(estado: number) {
    this.sesionUsuario.next(estado);
  }

  public cambiarRol(estado: boolean) {
    this.rol.next(estado);
  }
}

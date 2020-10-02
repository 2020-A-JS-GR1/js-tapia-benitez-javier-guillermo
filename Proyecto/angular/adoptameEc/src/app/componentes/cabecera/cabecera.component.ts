import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SesionService } from 'src/app/servicios/sesion.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  @Input()
  sesion: boolean;

  @Input()
  rol: boolean;

  urlLogo = '../../../assets/img/Logo.png';

  constructor(
    private readonly _router: Router,
    private _sesionService: SesionService,
  ) { }

  ngOnInit(): void {
  }

  irARegistro() {
    const ruta = ['/registro'];
    this._router.navigate(ruta);
  }

  irALogin() {
    if (this.sesion) {
      this._sesionService.cambiarSesion(false);
      this._sesionService.cambiarSesionUsuario(0);
      this._sesionService.cambiarRol(false);
      const rutaInicio = ['/adoptar'];
      this._router.navigate(rutaInicio);
    } else {
      const rutaLogin = ['/login'];
      this._router.navigate(rutaLogin);
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { SesionService } from './servicios/sesion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  administrador: Object[] = [
    {
      ruta: 'estadisticas',
      etiqueta: 'Estadisticas'
    },
    {
      ruta: 'usuarios',
      etiqueta: 'Usuarios'
    },
    {
      ruta: 'mascotas',
      etiqueta: 'Mascotas'
    },
    {
      ruta: 'peticiones',
      etiqueta: 'Peticiones'
    },
    {
      ruta: 'refugios',
      etiqueta: 'Refugios'
    },
    {
      ruta: 'roles',
      etiqueta: 'Roles'
    }
  ];
  cliente: Object[] = [
    {
      ruta: 'inicio',
      etiqueta: 'Inicio'
    },
    {
      ruta: 'nosotros',
      etiqueta: 'Nosotros'
    },
    {
      ruta: 'adoptar',
      etiqueta: 'Adoptar'
    },
    {
      ruta: 'donar',
      etiqueta: 'Donar'
    },
    {
      ruta: 'contacto',
      etiqueta: 'Contacto'
    }
  ];
  
  color: Object = {
    background: '#223c75'
  };
  
  sesionUsuario: number = 0;
  sesion: boolean = false;
  rol: boolean = false;

  constructor(
    private _sesionService: SesionService
  ) { }

  ngOnInit(): void {
    this._sesionService.seleccionarSesion.subscribe(sesion => this.sesion = sesion);
    this._sesionService.seleccionarSesionUsuario.subscribe(sesionUsuario => this.sesionUsuario = sesionUsuario);
    this._sesionService.seleccionarRol.subscribe(rol => this.rol = rol);
  }

}

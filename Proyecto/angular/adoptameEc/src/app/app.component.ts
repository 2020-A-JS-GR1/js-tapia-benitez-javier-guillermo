import { Component, OnInit } from '@angular/core';

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
  
  rol: boolean = true;
  color: Object = {
    background: '#223c75'
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}

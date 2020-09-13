import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-usuarios',
  templateUrl: './ruta-usuarios.component.html',
  styleUrls: ['./ruta-usuarios.component.css']
})
export class RutaUsuariosComponent implements OnInit {

  listas: Object[] = [
    {
      ruta: 'lista-usuarios',
      etiqueta: 'Usuarios Registrados'
    },
    {
      ruta: 'lista-roles-usuarios',
      etiqueta: 'Roles de Usuario'
    },
    {
      ruta: 'lista-donaciones',
      etiqueta: 'Donaciones'
    },
    {
      ruta: 'lista-tarjetas',
      etiqueta: 'Tarjetas'
    }
  ];

  color: Object = {
    background: '#3864c2'
  };

  constructor() { }

  ngOnInit(): void {
  }

}

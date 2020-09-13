import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-mascotas',
  templateUrl: './ruta-mascotas.component.html',
  styleUrls: ['./ruta-mascotas.component.css']
})
export class RutaMascotasComponent implements OnInit {

  listas: Object[] = [
    {
      ruta: 'lista-mascotas',
      etiqueta: 'Mascotas Registradas'
    },
    {
      ruta: 'lista-refugios-mascotas',
      etiqueta: 'Refugios de Mascotas'
    },
    {
      ruta: 'lista-fotografias-mascotas',
      etiqueta: 'Fotografias de Mascotas'
    },
    {
      ruta: 'lista-especies',
      etiqueta: 'Especies'
    },
    {
      ruta: 'lista-razas',
      etiqueta: 'Razas'
    }
  ];

  color: Object = {
    background: '#3864c2'
  };

  constructor() { }

  ngOnInit(): void {
  }

}

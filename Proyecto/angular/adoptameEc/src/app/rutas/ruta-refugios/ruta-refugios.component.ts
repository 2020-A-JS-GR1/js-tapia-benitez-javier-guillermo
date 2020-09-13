import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-refugios',
  templateUrl: './ruta-refugios.component.html',
  styleUrls: ['./ruta-refugios.component.css']
})
export class RutaRefugiosComponent implements OnInit {

  listas: Object[] = [
    {
      ruta: 'lista-refugios',
      etiqueta: 'Refugios Habilitados'
    },
    {
      ruta: 'lista-provincias',
      etiqueta: 'Provincias Disponibles'
    }
  ];

  color: Object = {
    background: '#3864c2'
  };

  constructor() { }

  ngOnInit(): void {
  }

}

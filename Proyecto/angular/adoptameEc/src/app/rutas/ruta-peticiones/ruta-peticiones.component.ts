import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-peticiones',
  templateUrl: './ruta-peticiones.component.html',
  styleUrls: ['./ruta-peticiones.component.css']
})
export class RutaPeticionesComponent implements OnInit {

  listas: Object[] = [
    {
      ruta: 'lista-peticiones',
      etiqueta: 'Todas las Peticiones'
    },
    {
      ruta: 'lista-peticiones-pendientes',
      etiqueta: 'Peticiones Pendientes'
    }
  ];

  color: Object = {
    background: '#3864c2'
  };

  constructor() { }

  ngOnInit(): void {
  }

}

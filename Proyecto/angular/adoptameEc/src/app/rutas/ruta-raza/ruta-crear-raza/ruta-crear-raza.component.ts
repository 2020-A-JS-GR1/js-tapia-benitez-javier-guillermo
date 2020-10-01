import { Raza } from './../../../modelos/raza';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RazaService } from 'src/app/servicios/http/raza.service';

@Component({
  selector: 'app-ruta-crear-raza',
  templateUrl: './ruta-crear-raza.component.html',
  styleUrls: ['./ruta-crear-raza.component.css']
})
export class RutaCrearRazaComponent implements OnInit {

  constructor(
    private readonly _razaService: RazaService,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
  }

  crearRaza(raza: Raza) {
    const observableCrearRaza = this._razaService.createRaza(raza);
    observableCrearRaza
      .subscribe(
        () => {
          console.log('Raza registrada: ', raza);
          const ruta = ['/mascotas', 'lista-razas'];
          this._router.navigate(ruta);
        },
        error => {
          console.error('Error registrando raza', error);
        }
      );
  }
}

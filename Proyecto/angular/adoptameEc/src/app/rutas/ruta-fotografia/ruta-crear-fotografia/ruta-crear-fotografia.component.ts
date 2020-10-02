import { Fotografia } from './../../../modelos/fotografia';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FotografiaService } from 'src/app/servicios/http/fotografia.service';

@Component({
  selector: 'app-ruta-crear-fotografia',
  templateUrl: './ruta-crear-fotografia.component.html',
  styleUrls: ['./ruta-crear-fotografia.component.css']
})
export class RutaCrearFotografiaComponent implements OnInit {

  constructor(
    private readonly _fotografiaService: FotografiaService,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
  }

  crearFotografia(fotografia: Fotografia) {
    const observableCrearFotografia = this._fotografiaService.createFotografia(fotografia);
    observableCrearFotografia
      .subscribe(
        () => {
          console.log('Fotografia registrada: ', fotografia);
          const ruta = ['/mascotas', 'lista-fotografias'];
          this._router.navigate(ruta);
        },
        error => {
          console.error('Error registrando fotografia', error);
        }
      );
  }
}

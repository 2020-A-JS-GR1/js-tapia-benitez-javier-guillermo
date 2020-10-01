import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Especie } from 'src/app/modelos/especie';
import { EspecieService } from 'src/app/servicios/http/especie.service';

@Component({
  selector: 'app-ruta-crear-especie',
  templateUrl: './ruta-crear-especie.component.html',
  styleUrls: ['./ruta-crear-especie.component.css']
})
export class RutaCrearEspecieComponent implements OnInit {

  constructor(
    private readonly _especieService: EspecieService,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
  }

  crearEspecie(especie: Especie) {
    const observableCrearEspecie = this._especieService.createEspecie(especie);
    observableCrearEspecie
      .subscribe(
        () => {
          console.log('Especie registrada: ', especie);
          const ruta = ['/mascotas', 'lista-especies'];
          this._router.navigate(ruta);
        },
        error => {
          console.error('Error registrando especie', error);
        }
      );
  }
}

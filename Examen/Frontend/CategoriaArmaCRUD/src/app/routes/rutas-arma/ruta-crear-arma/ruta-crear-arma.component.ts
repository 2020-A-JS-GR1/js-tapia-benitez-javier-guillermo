import { Arma } from './../../../models/arma';
import { Router } from '@angular/router';
import { ArmaService } from './../../../services/http/arma.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-crear-arma',
  templateUrl: './ruta-crear-arma.component.html',
  styleUrls: ['./ruta-crear-arma.component.css']
})
export class RutaCrearArmaComponent implements OnInit {

  constructor(
    private readonly _armaService: ArmaService,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
  }

  crearArma(arma: Arma) {
    const observableCrearArma = this._armaService.add(arma);
    observableCrearArma
      .subscribe(
        () => {
          alert('Arma registrada con exito');
          const ruta = ['/lista-arma'];
          this._router.navigate(ruta);
        },
        error => {
          alert('Error registrando arma')
          console.error('Error registrando arma', error);
        }
      );
  }
}

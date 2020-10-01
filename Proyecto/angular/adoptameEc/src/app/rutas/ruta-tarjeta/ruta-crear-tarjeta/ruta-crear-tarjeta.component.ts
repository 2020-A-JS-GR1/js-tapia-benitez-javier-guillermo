import { NgForm } from '@angular/forms';
import { TarjetaService } from 'src/app/servicios/http/tarjeta.service';
import { Component, OnInit } from '@angular/core';
import { Tarjeta } from 'src/app/modelos/tarjeta';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ruta-crear-tarjeta',
  templateUrl: './ruta-crear-tarjeta.component.html',
  styleUrls: ['./ruta-crear-tarjeta.component.css']
})
export class RutaCrearTarjetaComponent implements OnInit {

  constructor(
    private readonly _tarjetaService: TarjetaService,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
  }

  crearTarjeta(tarjeta: Tarjeta){
    const observableCrearTarjeta = this._tarjetaService.createTarjeta(tarjeta);
    observableCrearTarjeta
      .subscribe(
        () => {
          console.log('Tarjeta registrada: ', tarjeta);
          const ruta = ['/usuarios', 'lista-tarjetas'];
          this._router.navigate(ruta);
        },
        error => {
          console.error('Error registrando tarjeta', error);
        }
      );
  }
}

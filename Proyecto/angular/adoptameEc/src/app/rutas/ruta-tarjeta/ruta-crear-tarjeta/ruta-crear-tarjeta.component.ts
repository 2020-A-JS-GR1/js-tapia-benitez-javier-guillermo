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

  nuevaTarjeta: Tarjeta = new Tarjeta('', '', '', 0);
  fechaCaducidadNuevaTarjeta: string;

  constructor(
    private readonly _tarjetaService: TarjetaService,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
  }

  crearTarjeta(formulario: NgForm){
    this.nuevaTarjeta.numero = formulario.form.value.numero;
    if (formulario.form.value.dia < 10) {
      this.fechaCaducidadNuevaTarjeta = '0' + String(formulario.form.value.dia) + '/' + String(formulario.form.value.anio);
    } else {
      this.fechaCaducidadNuevaTarjeta = String(formulario.form.value.dia) + '/' + String(formulario.form.value.anio);
    }
    this.nuevaTarjeta.fechaCaducidad = this.fechaCaducidadNuevaTarjeta;
    this.nuevaTarjeta.cvv = formulario.form.value.cvv;
    this.nuevaTarjeta.id_usuario = formulario.form.value.id_usuario; 

    const observableCrearTarjeta = this._tarjetaService.createTarjeta(this.nuevaTarjeta);
    observableCrearTarjeta
      .subscribe(
        () => {
          console.log('Tarjeta registrada: ', this.nuevaTarjeta);
          const ruta = ['/usuarios', 'lista-tarjetas'];
          this._router.navigate(ruta);
        },
        error => {
          console.error('Error registrando tarjeta', error);
        }
      );
  }
}

import { NgForm } from '@angular/forms';
import { TarjetaService } from 'src/app/servicios/http/tarjeta.service';
import { Component, OnInit } from '@angular/core';
import { Tarjeta } from 'src/app/modelos/tarjeta';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-ruta-editar-tarjeta',
  templateUrl: './ruta-editar-tarjeta.component.html',
  styleUrls: ['./ruta-editar-tarjeta.component.css']
})
export class RutaEditarTarjetaComponent implements OnInit {

  editadoTarjeta: Tarjeta = new Tarjeta('', '', '', 0);
  id: number;
  fechaCaducidadNuevaTarjeta: string;

  constructor(
    private readonly _tarjetaService: TarjetaService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
    const observableRutaTarjeta = this._activatedRoute.params;
    observableRutaTarjeta
      .subscribe(
        (parametros: Params) => {
          this.id = Number(parametros.id);
        }
      );
  }

  actualizarTarjeta(formulario: NgForm) {
    this.editadoTarjeta.numero = formulario.form.value.numero;
    if (formulario.form.value.dia < 10) {
      this.fechaCaducidadNuevaTarjeta = '0' + String(formulario.form.value.dia) + '/' + String(formulario.form.value.anio);
    } else {
      this.fechaCaducidadNuevaTarjeta = String(formulario.form.value.dia) + '/' + String(formulario.form.value.anio);
    }
    this.editadoTarjeta.fechaCaducidad = this.fechaCaducidadNuevaTarjeta;
    this.editadoTarjeta.cvv = formulario.form.value.cvv;
    this.editadoTarjeta.id_usuario = formulario.form.value.id_usuario;

    const observableActualizarTarjeta = this._tarjetaService.updateTarjeta(this.id, this.editadoTarjeta);
    observableActualizarTarjeta
      .subscribe(
        () => {
          console.log('Tarjeta actualizada: ', this.editadoTarjeta);
          const ruta = ['/usuarios', 'lista-tarjetas'];
          this._router.navigate(ruta);
        },
        error => {
          console.error('Error obteniendo tarjeta', error);
        }
      );
  }
}

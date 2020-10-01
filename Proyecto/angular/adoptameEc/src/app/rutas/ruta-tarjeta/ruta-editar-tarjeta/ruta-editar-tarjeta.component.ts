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

  editadoTarjeta: Tarjeta;

  id: number;
  mostrarFormulario: boolean = false;

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
          const observableObtenerTarjeta = this._tarjetaService.getTarjeta(this.id);
          observableObtenerTarjeta
            .subscribe(
              (tarjeta: Tarjeta) => {
                this.editadoTarjeta = tarjeta;
                this.llenarFormularioTarjeta();
              },
              error => {
                console.error('Error obteniendo tarjeta', error);
              }
            );
        }
      );
  }

  llenarFormularioTarjeta() {
    this.mostrarFormulario = true;
  }

  actualizarTarjeta(tarjeta: Tarjeta) {
    const observableActualizarTarjeta = this._tarjetaService.updateTarjeta(this.id, tarjeta);
    observableActualizarTarjeta
      .subscribe(
        () => {
          console.log('Tarjeta actualizada: ', tarjeta);
          const ruta = ['/usuarios', 'lista-tarjetas'];
          this._router.navigate(ruta);
        },
        error => {
          console.error('Error actualizando tarjeta', error);
        }
      );
  }
}

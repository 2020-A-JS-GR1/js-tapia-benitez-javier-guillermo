import { ProvinciaService } from './../../../servicios/http/provincia.service';
import { Provincia } from './../../../modelos/provincia';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ruta-editar-provincia',
  templateUrl: './ruta-editar-provincia.component.html',
  styleUrls: ['./ruta-editar-provincia.component.css']
})
export class RutaEditarProvinciaComponent implements OnInit {

  editadoProvincia: Provincia;
  id: number

  constructor(
    private readonly _provinciaService: ProvinciaService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
    const observableRutaProvincia = this._activatedRoute.params;
    observableRutaProvincia
      .subscribe(
        (parametros: Params) => {
          this.id = Number(parametros.id);
        }
      );
  }

  actualizarProvincia(formulario: NgForm) {
    this.editadoProvincia = formulario.form.value;
    const observableActualizarProvincia = this._provinciaService.updateProvincia(this.id, this.editadoProvincia);
    observableActualizarProvincia
      .subscribe(
        () => {
          console.log('Provincia actualizada: ', this.editadoProvincia);
          const ruta = ['/refugios', 'lista-provincias'];
          this._router.navigate(ruta);
        },
        error => {
          console.error('Error obteniendo provincia', error);
        }
      );
  }
}

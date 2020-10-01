import { Raza } from './../../../modelos/raza';
import { Component, OnInit } from '@angular/core';
import { RazaService } from 'src/app/servicios/http/raza.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-ruta-editar-raza',
  templateUrl: './ruta-editar-raza.component.html',
  styleUrls: ['./ruta-editar-raza.component.css']
})
export class RutaEditarRazaComponent implements OnInit {

  editadoRaza: Raza;

  id: number;
  mostrarFormulario: boolean = false;

  constructor(
    private readonly _razaService: RazaService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
    const observableRutaRaza = this._activatedRoute.params;
    observableRutaRaza
      .subscribe(
        (parametros: Params) => {
          this.id = Number(parametros.id);
          const observableObtenerRaza = this._razaService.getRaza(this.id);
          observableObtenerRaza
            .subscribe(
              (raza: Raza) => {
                this.editadoRaza = raza;
                this.llenarFormularioRaza();
              }
            );
        }
      );
  }

  llenarFormularioRaza() {
    this.mostrarFormulario = true;
  }

  actualizarRaza(raza: Raza) {
    const observableActualizarRaza = this._razaService.updateRaza(this.id, raza);
    observableActualizarRaza
      .subscribe(
        () => {
          console.log('Raza actualizada: ', raza);
          const ruta = ['/mascotas', 'lista-razas'];
          this._router.navigate(ruta);
        },
        error => {
          console.error('Error actualizando raza', error);
        }
      );
  }
}

import { Especie } from './../../../modelos/especie';
import { Component, OnInit } from '@angular/core';
import { EspecieService } from 'src/app/servicios/http/especie.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-ruta-editar-especie',
  templateUrl: './ruta-editar-especie.component.html',
  styleUrls: ['./ruta-editar-especie.component.css']
})
export class RutaEditarEspecieComponent implements OnInit {

  editadoEspecie: Especie;

  id: number;
  mostrarFormulario: boolean = false;

  constructor(
    private readonly _especieService: EspecieService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
    const observableRutaEspecie = this._activatedRoute.params;
    observableRutaEspecie
      .subscribe(
        (parametros: Params) => {
          this.id = Number(parametros.id);
          const observableObtenerEspecie = this._especieService.getEspecie(this.id);
          observableObtenerEspecie
            .subscribe(
              (especie: Especie) => {
                this.editadoEspecie = especie;
                this.llenarFormularioEspecie();
              }
            );
        }
      );
  }

  llenarFormularioEspecie() {
    this.mostrarFormulario = true;
  }

  actualizarEspecie(especie: Especie) {
    const observableActualizarEspecie = this._especieService.updateEspecie(this.id, especie);
    observableActualizarEspecie
      .subscribe(
        () => {
          console.log('Especie actualizada: ', especie);
          const ruta = ['/mascotas', 'lista-especies'];
          this._router.navigate(ruta);
        },
        error => {
          console.error('Error actualizando especie', error);
        }
      );
  }
}

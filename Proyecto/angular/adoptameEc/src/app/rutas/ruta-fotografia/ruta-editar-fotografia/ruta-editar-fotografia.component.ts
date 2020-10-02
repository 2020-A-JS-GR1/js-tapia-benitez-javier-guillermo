import { Fotografia } from './../../../modelos/fotografia';
import { Component, OnInit } from '@angular/core';
import { FotografiaService } from 'src/app/servicios/http/fotografia.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-ruta-editar-fotografia',
  templateUrl: './ruta-editar-fotografia.component.html',
  styleUrls: ['./ruta-editar-fotografia.component.css']
})
export class RutaEditarFotografiaComponent implements OnInit {

  editadoFotografia: Fotografia;

  id: number;
  mostrarFormulario: boolean = false;

  constructor(
    private readonly _fotografiaService: FotografiaService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
    const observableRutaFotografia = this._activatedRoute.params;
    observableRutaFotografia
      .subscribe(
        (parametros: Params) => {
          this.id = Number(parametros.id);
          const observableObtenerFotografia = this._fotografiaService.getFotografia(this.id);
          observableObtenerFotografia
            .subscribe(
              (fotografia: Fotografia) => {
                this.editadoFotografia = fotografia;
                this.llenarFormularioFotografia();
              }
            );
        }
      );
  }

  llenarFormularioFotografia() {
    this.mostrarFormulario = true;
  }

  actualizarFotografia(fotografia: Fotografia) {
    const observableActualizarFotografia = this._fotografiaService.updateFotografia(this.id, fotografia);
    observableActualizarFotografia
      .subscribe(
        () => {
          console.log('Fotografia actualizada: ', fotografia);
          const ruta = ['/mascotas', 'lista-fotografias'];
          this._router.navigate(ruta);
        },
        error => {
          console.error('Error actualizando fotografia', error);
        }
      );
  }
}

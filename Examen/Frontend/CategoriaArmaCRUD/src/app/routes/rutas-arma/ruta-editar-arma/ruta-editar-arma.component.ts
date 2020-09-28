import { ArmaService } from './../../../services/http/arma.service';
import { Arma } from './../../../models/arma';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-ruta-editar-arma',
  templateUrl: './ruta-editar-arma.component.html',
  styleUrls: ['./ruta-editar-arma.component.css']
})
export class RutaEditarArmaComponent implements OnInit {

  mostrarFormulario: boolean = false;

  id: number;
  arma: Arma;

  constructor(
    private readonly _armaService: ArmaService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
    const observableRutaArma = this._activatedRoute.params;
    observableRutaArma
      .subscribe(
        (parametros: Params) => {
          this.id = Number(parametros.id);
          const observableObtenerArma = this._armaService.getById(this.id);
          observableObtenerArma
            .subscribe(
              (arma: Arma) => {
                this.arma = arma;
                this.llenarFormularioArma();
              },
              error => {
                console.error('Error obteniendo arma', error);
              }
            );
        }
      );
  }

  llenarFormularioArma() {
    this.mostrarFormulario = true;
  }

  actualizarArma(arma: Arma) {
    const observableActualizarArma = this._armaService.update(this.id, arma);
    observableActualizarArma
      .subscribe(
        () => {
          alert('Arma actualizada con exito');
          const ruta = ['lista-arma'];
          this._router.navigate(ruta);
        },
        error => {
          alert('Error actualizando arma');
          console.error('Error actualizando arma', error);
        }
      );
  }
}

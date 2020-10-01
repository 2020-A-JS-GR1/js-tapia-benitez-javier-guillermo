import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Refugio } from 'src/app/modelos/refugio';
import { RefugioService } from 'src/app/servicios/http/refugio.service';

@Component({
  selector: 'app-ruta-editar-refugio',
  templateUrl: './ruta-editar-refugio.component.html',
  styleUrls: ['./ruta-editar-refugio.component.css']
})
export class RutaEditarRefugioComponent implements OnInit {

  editadoRefugio: Refugio;

  id: number;
  mostrarFormulario: boolean = false;

  constructor(
    private readonly _refugioService: RefugioService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
    const observableRutaRefugio = this._activatedRoute.params;
    observableRutaRefugio
      .subscribe(
        (parametros: Params) => {
          this.id = Number(parametros.id);
          const observableObtenerRefugio = this._refugioService.getRefugio(this.id);
          observableObtenerRefugio
            .subscribe(
              (refugio: Refugio) => {
                this.editadoRefugio = refugio;
                this.llenarFormularioRefugio();
              },
              error => {
                console.error('Error obteniendo refugio', error);
              }
            );
        }
      );
  }

  llenarFormularioRefugio() {
    this.mostrarFormulario = true;
  }

  actualizarRefugio(refugio: Refugio) {
    const observableActualizarRefugio = this._refugioService.updateRefugio(this.id, refugio);
    observableActualizarRefugio
      .subscribe(
        () => {
          console.log('Refugio actualizado:', refugio);
          const ruta = ['/refugios', 'lista-refugios'];
          this._router.navigate(ruta);
        },
        error => {
          console.error('Error actualizando refugio', error);
        }
      );
  }
}

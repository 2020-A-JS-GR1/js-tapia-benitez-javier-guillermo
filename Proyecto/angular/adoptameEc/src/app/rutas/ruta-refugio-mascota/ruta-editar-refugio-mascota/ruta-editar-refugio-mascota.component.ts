import { RefugioMascota } from './../../../modelos/refugio-mascota';
import { Component, OnInit } from '@angular/core';
import { RefugioMascotaService } from 'src/app/servicios/http/refugio-mascota.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-ruta-editar-refugio-mascota',
  templateUrl: './ruta-editar-refugio-mascota.component.html',
  styleUrls: ['./ruta-editar-refugio-mascota.component.css']
})
export class RutaEditarRefugioMascotaComponent implements OnInit {

  editadoRefugioMascota: RefugioMascota;

  id: number;
  mostrarFormulario: boolean = false;

  constructor(
    private readonly _refugioMascotaService: RefugioMascotaService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
    const observableRutaRefugioMascota = this._activatedRoute.params;
    observableRutaRefugioMascota
      .subscribe(
        (parametros: Params) => {
          this.id = Number(parametros.id);
          const observableObtenerRefugioMascota = this._refugioMascotaService.getRefugioMascota(this.id);
          observableObtenerRefugioMascota
            .subscribe(
              (refugioMascota: RefugioMascota) => {
                this.editadoRefugioMascota = refugioMascota;
                this.llenarFormularioRefugioMascota();
              },
              error => {
                console.error('Error obteniendo mascota en refugio', error);
              }
            );
        }
      );
  }

  llenarFormularioRefugioMascota() {
    this.mostrarFormulario = true;
  }

  actualizarRefugioMascota(refugioMascota: RefugioMascota) {
    const observableActualizarRefugioMascota = this._refugioMascotaService.updateRefugioMascota(this.id, refugioMascota);
    observableActualizarRefugioMascota
      .subscribe(
        () => {
          console.log('Mascota actualizada en refugio:', refugioMascota);
          const ruta = ['/mascotas', 'lista-refugios-mascotas'];
          this._router.navigate(ruta);
        },
        error => {
          console.error('Error actualizando mascota en refugio', error);
        }
      );
  }
}

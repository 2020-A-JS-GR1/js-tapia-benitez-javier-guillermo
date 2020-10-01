import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Mascota } from 'src/app/modelos/mascota';
import { MascotaService } from 'src/app/servicios/http/mascota.service';

@Component({
  selector: 'app-ruta-editar-mascota',
  templateUrl: './ruta-editar-mascota.component.html',
  styleUrls: ['./ruta-editar-mascota.component.css']
})
export class RutaEditarMascotaComponent implements OnInit {

  editadoMascota: Mascota;

  id: number;
  mostrarFormulario: boolean = false;

  constructor(
    private readonly _mascotaService: MascotaService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
    const observableRutaMascota = this._activatedRoute.params;
    observableRutaMascota
      .subscribe(
        (parametros: Params) => {
          this.id = Number(parametros.id);
          const observableObtenerMascota = this._mascotaService.getMascota(this.id);
          observableObtenerMascota
            .subscribe(
              (mascota: Mascota) => {
                this.editadoMascota = mascota;
                this.llenarFormularioMascota();
              }
            );
        }
      );
  }

  llenarFormularioMascota() {
    this.mostrarFormulario = true;
  }

  actualizarMascota(mascota: Mascota) {
    const observableActualizarMascota = this._mascotaService.updateMascota(this.id, mascota);
    observableActualizarMascota
      .subscribe(
        () => {
          console.log('Mascota actualizada: ', mascota);
          const ruta = ['/mascotas', 'lista-mascotas'];
          this._router.navigate(ruta);
        },
        error => {
          console.error('Error actualizando mascota', error);
        }
      );
  }
}

import { MascotaService } from './../../../servicios/http/mascota.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mascota } from 'src/app/modelos/mascota';

@Component({
  selector: 'app-ruta-crear-mascota',
  templateUrl: './ruta-crear-mascota.component.html',
  styleUrls: ['./ruta-crear-mascota.component.css']
})
export class RutaCrearMascotaComponent implements OnInit {

  constructor(
    private readonly _mascotaService: MascotaService,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
  }

  crearMascota(mascota: Mascota) {
    const observableCrearMascota = this._mascotaService.createMascota(mascota);
    observableCrearMascota
      .subscribe(
        () => {
          console.log('Mascota registrada: ', mascota);
          const ruta = ['/mascotas', 'lista-mascotas'];
          this._router.navigate(ruta);
        },
        error => {
          console.error('Error registrando mascota', error);
        }
      );
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RefugioMascota } from 'src/app/modelos/refugio-mascota';
import { RefugioMascotaService } from 'src/app/servicios/http/refugio-mascota.service';

@Component({
  selector: 'app-ruta-crear-refugio-mascota',
  templateUrl: './ruta-crear-refugio-mascota.component.html',
  styleUrls: ['./ruta-crear-refugio-mascota.component.css']
})
export class RutaCrearRefugioMascotaComponent implements OnInit {

  constructor(
    private readonly _refugioMascotaService: RefugioMascotaService,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
  }

  crearRefugioMascota(refugioMascota: RefugioMascota) {
    const observableCrearRefugioMascota = this._refugioMascotaService.createRefugioMascota(refugioMascota);
    observableCrearRefugioMascota
      .subscribe(
        () => {
          console.log('Mascota registrada en refugio: ', refugioMascota);
          const ruta = ['/mascotas', 'lista-refugios-mascotas'];
          this._router.navigate(ruta);
        },
        error => {
          console.error('Error registrando mascota en refugio', error);
        }
      );
  }
}

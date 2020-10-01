import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Refugio } from 'src/app/modelos/refugio';
import { RefugioService } from 'src/app/servicios/http/refugio.service';

@Component({
  selector: 'app-ruta-crear-refugio',
  templateUrl: './ruta-crear-refugio.component.html',
  styleUrls: ['./ruta-crear-refugio.component.css']
})
export class RutaCrearRefugioComponent implements OnInit {

  constructor(
    private readonly _refugioService: RefugioService,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
  }

  crearRefugio(refugio: Refugio) {
    const observableCrearRefugio = this._refugioService.createRefugio(refugio);
    observableCrearRefugio
      .subscribe(
        () => {
          console.log('Refugio registrado: ', refugio);
          const ruta = ['/refugios', 'lista-refugios'];
          this._router.navigate(ruta);
        },
        error => {
          console.error('Error registrando refugio', error);
        }
      );
  }
}

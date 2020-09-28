import { CategoriaService } from './../../../services/http/categoria.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';

@Component({
  selector: 'app-ruta-crear-categoria',
  templateUrl: './ruta-crear-categoria.component.html',
  styleUrls: ['./ruta-crear-categoria.component.css']
})
export class RutaCrearCategoriaComponent implements OnInit {

  constructor(
    private readonly _categoriaService: CategoriaService,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
  }

  crearCategoria(categoria: Categoria) {
    const observableCrearCategoria = this._categoriaService.add(categoria);
    observableCrearCategoria
      .subscribe(
        () => {
          alert('Categoria registrada con exito');
          const ruta = ['/lista-categoria'];
          this._router.navigate(ruta);
        },
        error => {
          alert('Error registrando categoria')
          console.error('Error registrando categoria', error);
        }
      );
  }
}

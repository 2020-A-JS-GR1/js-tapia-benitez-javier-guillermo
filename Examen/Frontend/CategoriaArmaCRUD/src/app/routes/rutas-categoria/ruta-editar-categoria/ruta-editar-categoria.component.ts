import { CategoriaService } from './../../../services/http/categoria.service';
import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-ruta-editar-categoria',
  templateUrl: './ruta-editar-categoria.component.html',
  styleUrls: ['./ruta-editar-categoria.component.css']
})
export class RutaEditarCategoriaComponent implements OnInit {

  mostrarFormulario: boolean = false;

  id: number;
  categoria: Categoria;

  constructor(
    private readonly _categoriaService: CategoriaService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
    const observableRutaCategoria = this._activatedRoute.params;
    observableRutaCategoria
      .subscribe(
        (parametros: Params) => {
          this.id = Number(parametros.id);
          const observableObtenerCategoria = this._categoriaService.getById(this.id);
          observableObtenerCategoria
            .subscribe(
              (categoria: Categoria) => {
                this.categoria = categoria;
                this.llenarFormularioCategoria();
              },
              error => {
                console.error('Error obteniendo categoria', error);
              }
            );
        }
      );
  }

  llenarFormularioCategoria() {
    this.mostrarFormulario = true;
  }

  actualizarCategoria(categoria: Categoria) {
    const observableActualizarCategoria = this._categoriaService.update(this.id, categoria);
    observableActualizarCategoria
      .subscribe(
        () => {
          alert('Categoria actualizada con exito')
          const ruta = ['lista-categoria'];
          this._router.navigate(ruta);
        },
        error => {
          alert('Error actualizando categoria')
          console.error('Error actualizando categoria', error);
        }
      );
  }
}

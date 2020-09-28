import { CategoriaService } from './../../../services/http/categoria.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-ruta-lista-categoria',
  templateUrl: './ruta-lista-categoria.component.html',
  styleUrls: ['./ruta-lista-categoria.component.css']
})
export class RutaListaCategoriaComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  columnas: string[] = ['nombre', 'descripcion', 'tipo', "acciones"];

  arregloCategorias: Categoria[] = [];

  dataSource = new MatTableDataSource<Categoria>();

  constructor(
    private readonly _categoriaService: CategoriaService
  ) { }

  ngOnInit(): void {
    const observableCategorias = this._categoriaService.get();
    observableCategorias
      .subscribe(
        (categoria: Categoria[]) => {
          this.arregloCategorias = categoria;
          this.dataSource.data = this.arregloCategorias;
        },
        error => {
          console.error('Error obteniendo categorias', error);
        }
      );

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  filtrar(busqueda: string) {
    this.dataSource.filter = busqueda.trim().toLowerCase();
  }

  eliminarCategoria(id: number) {
    const observableEliminarCategoria = this._categoriaService.delete(id);
    observableEliminarCategoria
      .subscribe(
        () => {
          const indice = this.arregloCategorias.findIndex(categoria => categoria.id === id);
          this.arregloCategorias.splice(indice, 1);
          this.dataSource.data = this.arregloCategorias;
        },
        error => {
          console.error('Error eliminando categoria', error);
        }
      );
  }
}

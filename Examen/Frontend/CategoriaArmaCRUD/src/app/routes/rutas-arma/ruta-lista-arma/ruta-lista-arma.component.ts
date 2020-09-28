import { Categoria } from 'src/app/models/categoria';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ArmaService } from './../../../services/http/arma.service';
import { Arma } from './../../../models/arma';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoriaService } from 'src/app/services/http/categoria.service';

@Component({
  selector: 'app-ruta-lista-arma',
  templateUrl: './ruta-lista-arma.component.html',
  styleUrls: ['./ruta-lista-arma.component.css']
})
export class RutaListaArmaComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  columnas: string[] = ['nombre', 'imagen', 'rpm', 'capacidad', 'categoria', "acciones"];

  arregloArmas: Arma[] = [];
  arregloCategorias: Categoria[] = [];

  dataSource = new MatTableDataSource<Arma>();

  constructor(
    private readonly _armaService: ArmaService,
    private readonly _categoriaService: CategoriaService
  ) { }

  ngOnInit(): void {
    const observableArmas = this._armaService.get();
    observableArmas
      .subscribe(
        (armas: Arma[]) => {
          this.arregloArmas = armas;
          this.dataSource.data = this.arregloArmas;
        },
        error => {
          console.error('Error obteniendo armas', error);
        }
      );

    const observableCategorias = this._categoriaService.get();
    observableCategorias
      .subscribe(
        (categoria: Categoria[]) => {
          this.arregloCategorias = categoria;
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

  filtrarLista(categoria: number) {
    if (categoria === 0) {
      this.dataSource.data = this.arregloArmas;
    } else {
      this.dataSource.data = this.arregloArmas.filter(arma => arma.categoria.id === categoria);
    }
  }

  eliminarArma(id: number) {
    const observableEliminarArma = this._armaService.delete(id);
    observableEliminarArma
      .subscribe(
        () => {
          const indice = this.arregloArmas.findIndex(arma => arma.id === id);
          this.arregloArmas.splice(indice, 1);
          this.dataSource.data = this.arregloArmas;
        },
        error => {
          console.error('Error eliminando arma', error);
        }
      );
  }
}

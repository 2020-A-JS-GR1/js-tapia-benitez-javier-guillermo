import { EspecieService } from './../../../servicios/http/especie.service';
import { Especie } from './../../../modelos/especie';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-ruta-lista-especies',
  templateUrl: './ruta-lista-especies.component.html',
  styleUrls: ['./ruta-lista-especies.component.css']
})
export class RutaListaEspeciesComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  columnas: string[] = ['nombre', "acciones"];

  arregloEspecies: Especie[] = [];

  dataSource = new MatTableDataSource<Especie>();

  constructor(
    private readonly _especieService: EspecieService
  ) { }

  ngOnInit(): void {
    const observableEspecies = this._especieService.getEspecies();
    observableEspecies
      .subscribe(
        (especies: Especie[]) => {
          this.arregloEspecies = especies;
          this.dataSource.data = this.arregloEspecies;
        },
        error => {
          console.error('Error obteniendo especies', error);
        }
      );

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  filtrarEspecie(busqueda: string) {
    this.dataSource.filter = busqueda.trim().toLowerCase();
  }

  eliminarEspecie(idEspecie: number) {
    const observableEliminarEspecie = this._especieService.deleteEspecie(idEspecie);
    observableEliminarEspecie
      .subscribe(
        () => {
          const indice = this.arregloEspecies.findIndex(especie => especie.id === idEspecie);
          this.arregloEspecies.splice(indice, 1);
          this.dataSource.data = this.arregloEspecies;
        },
        error => {
          console.error('Error eliminando especie', error);
        }
      );
  }
}

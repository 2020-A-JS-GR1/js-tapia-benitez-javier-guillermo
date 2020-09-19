import { MatSort } from '@angular/material/sort';
import { RolService } from './../../../servicios/http/rol.service';
import { Rol } from './../../../modelos/rol';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-ruta-lista-roles',
  templateUrl: './ruta-lista-roles.component.html',
  styleUrls: ['./ruta-lista-roles.component.css']
})
export class RutaListaRolesComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  columnas: string[] = ['nombre', "acciones"];

  arregloRoles: Rol[] = [];

  dataSource = new MatTableDataSource<Rol>();

  constructor(
    private readonly _rolService: RolService
  ) { }

  ngOnInit(): void {
    const observableRoles = this._rolService.getRoles();
    observableRoles
      .subscribe(
        (roles: Rol[]) => {
          this.arregloRoles = roles;
          this.dataSource.data = this.arregloRoles;
        },
        error => {
          console.error('Error obteniendo roles', error);
        }
      );

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  filtrarRol(busqueda: string) {
    this.dataSource.filter = busqueda.trim().toLowerCase();
  }

  eliminarRol(idRol: number) {
    const observableEliminarRol = this._rolService.deleteRol(idRol);
    observableEliminarRol
      .subscribe(
        () => {
          const indice = this.arregloRoles.findIndex(rol => rol.id === idRol);
          this.arregloRoles.splice(indice, 1);
          this.dataSource.data = this.arregloRoles;
        },
        error => {
          console.error('Error eliminando rol', error);
        }
      );
  }
}

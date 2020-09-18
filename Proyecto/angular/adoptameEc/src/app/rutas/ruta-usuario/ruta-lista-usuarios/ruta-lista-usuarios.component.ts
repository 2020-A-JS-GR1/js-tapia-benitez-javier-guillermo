import { ProvinciaService } from './../../../servicios/http/provincia.service';
import { UsuarioService } from './../../../servicios/http/usuario.service';
import { Provincia } from './../../../modelos/provincia';
import { Usuario } from './../../../modelos/usuario';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild, ɵbypassSanitizationTrustResourceUrl } from '@angular/core';

@Component({
  selector: 'app-ruta-lista-usuarios',
  templateUrl: './ruta-lista-usuarios.component.html',
  styleUrls: ['./ruta-lista-usuarios.component.css']
})
export class RutaListaUsuariosComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  columnas: string[] = ['nombre', 'email', 'provincia', "mascotas", "ninos", "acciones"];

  arregloUsuarios: Usuario[] = [];
  arregloProvincias: Provincia[] = [];

  dataSource = new MatTableDataSource<Usuario>();

  constructor(
    private readonly _usuarioService: UsuarioService,
    private readonly _provinciaService: ProvinciaService
  ) { }

  ngOnInit(): void {
    const observableUsuarios = this._usuarioService.getUsuarios();
    observableUsuarios
      .subscribe(
        (usuarios: Usuario[]) => {
          this.arregloUsuarios = usuarios;
          this.dataSource.data = this.arregloUsuarios;
        },
        error => {
          console.error('Error obteniendo usuarios', error);
        }
      );

    const observableProvincias = this._provinciaService.getProvincias();
    observableProvincias
      .subscribe(
        (provincias: Provincia[]) => {
          this.arregloProvincias = provincias;
        },
        error => {
          console.error('Error obteniendo provincias', error);
        }
      );

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  obtenerProvinciaUsuario(id: Provincia): string {
    const provincia = this.arregloProvincias.find(provincia => provincia.id === id.id);
    return provincia?.nombre;
  }

  obtenerMascotasUsuario(perros: number, gatos: number): number {
    return perros + gatos;
  }

  filtrarUsuario(busqueda: string) {
    this.dataSource.filter = busqueda.trim().toLowerCase();
  }

  eliminarUsuario(idUsuario: number) {
    const observableEliminarUsuario = this._usuarioService.deleteUsuario(idUsuario);
    observableEliminarUsuario
      .subscribe(
        () => {
          const indice = this.arregloUsuarios.findIndex(usuario => usuario.id === idUsuario);
          this.arregloUsuarios.splice(indice, 1);
          this.dataSource.data = this.arregloUsuarios;
        },
        error => {
          console.error('Error eliminando usuario', error);
        }
      );
  }
}

import { ProvinciaService } from './../../../servicios/http/provincia.service';
import { UsuarioService } from './../../../servicios/http/usuario.service';
import { Provincia } from './../../../modelos/provincia';
import { Usuario } from './../../../modelos/usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-lista-usuarios',
  templateUrl: './ruta-lista-usuarios.component.html',
  styleUrls: ['./ruta-lista-usuarios.component.css']
})
export class RutaListaUsuariosComponent implements OnInit {

  arregloUsuarios: Usuario[] = [];
  arregloProvincias: Provincia[] = [];

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
  }

  obtenerProvinciaUsuario(id: number): string {
    const provincia = this.arregloProvincias.find(provincia => provincia.id === id);
    return provincia?.nombre;
  }

  eliminarUsuario(idUsuario: number) {
    const observableEliminarUsuario = this._usuarioService.deleteUsuario(idUsuario);
    observableEliminarUsuario
      .subscribe(
        () => {
          const indice = this.arregloUsuarios.findIndex(usuario => usuario.id === idUsuario);
          this.arregloUsuarios.splice(indice, 1);
        },
        error => {
          console.error('Error eliminando usuario', error);
        }
      );
  }
}

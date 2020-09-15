import { Provincia } from './../../modelos/provincia';
import { ProvinciaService } from './../../servicios/http/provincia.service';
import { Usuario } from './../../modelos/usuario';
import { UsuarioService } from './../../servicios/http/usuario.service';
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
          console.error('Error', error);
        }
      );

    const observableProvincias = this._provinciaService.getProvincias();
    observableProvincias
      .subscribe(
        (provincias: Provincia[]) => {
          this.arregloProvincias = provincias;
        },
        error => {
          console.error('Error', error);
        }
      );
  }

  obtenerProvinciaUsuario(id: number): string {
    const provincia = this.arregloProvincias.find(provincia => provincia.id === id);
    return provincia?.nombre;
  }
}

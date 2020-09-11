import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/http/usuario.service';

@Component({
  selector: 'app-ruta-lista-usuario',
  templateUrl: './ruta-lista-usuario.component.html',
  styleUrls: ['./ruta-lista-usuario.component.css']
})
export class RutaListaUsuarioComponent implements OnInit {

  arregloUsuarios = [];

  constructor(
    private readonly _usuarioService: UsuarioService,
    private readonly _router: Router
  ) { }

  irAEditarUsuario(id: number) {
    const ruta = ['/usuario', 'editar', id];
    // /usuario/editar/1
    this._router.navigate(ruta);
  }

  eliminarUsuario(id: number) {
    const observableEliminar = this._usuarioService.eliminar(id);
    observableEliminar
      .subscribe(
        () => {
          // borrando de la interfaz
          const indice = this.arregloUsuarios
            .findIndex(u => u.id === id);
          this.arregloUsuarios.splice(indice, 1);
        },
        error => {
          console.error(error);
        }
      );
  }

  ngOnInit(): void {
    const observableTraerTodos = this._usuarioService.traerTodos();
    observableTraerTodos.
      subscribe(
        (usuarios: any[]) => {
          this.arregloUsuarios = usuarios;
        },
        error => {
          console.error(error);
        }
      )
  }
}

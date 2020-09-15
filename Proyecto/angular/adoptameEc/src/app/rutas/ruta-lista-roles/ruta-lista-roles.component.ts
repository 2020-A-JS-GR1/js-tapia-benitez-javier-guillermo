import { RolService } from './../../servicios/http/rol.service';
import { Rol } from './../../modelos/rol';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-lista-roles',
  templateUrl: './ruta-lista-roles.component.html',
  styleUrls: ['./ruta-lista-roles.component.css']
})
export class RutaListaRolesComponent implements OnInit {

  arregloRoles: Rol[] = [];

  constructor(
    private readonly _rolService: RolService
  ) { }

  ngOnInit(): void {
    const observableRoles = this._rolService.getRoles();
    observableRoles
      .subscribe(
        (roles: Rol[]) => {
          this.arregloRoles = roles;
        },
        error => {
          console.error('Error', error);
        }
      );
  }

}

import { RutaRolesComponent } from './rutas/ruta-roles/ruta-roles.component';
import { RutaRefugiosComponent } from './rutas/ruta-refugios/ruta-refugios.component';
import { RutaPeticionesComponent } from './rutas/ruta-peticiones/ruta-peticiones.component';
import { RutaMascotasComponent } from './rutas/ruta-mascotas/ruta-mascotas.component';
import { RutaUsuariosComponent } from './rutas/ruta-usuarios/ruta-usuarios.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaRegistroComponent } from './rutas/ruta-registro/ruta-registro.component';
import { RutaEstadisticasComponent } from './rutas/ruta-estadisticas/ruta-estadisticas.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    component: RutaEstadisticasComponent,
    path: 'estadisticas'
  },
  {
    component: RutaRegistroComponent,
    path: 'registro'
  },
  {
    component: RutaLoginComponent,
    path: 'login'
  },
  {
    component: RutaUsuariosComponent,
    path: 'usuarios'
  },
  {
    component: RutaMascotasComponent,
    path: 'mascotas'
  },
  {
    component: RutaPeticionesComponent,
    path: 'peticiones'
  },
  {
    component: RutaRefugiosComponent,
    path: 'refugios'
  },
  {
    component: RutaRolesComponent,
    path: 'roles'
  },
  {
    path: '',
    redirectTo: '/estadisticas',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

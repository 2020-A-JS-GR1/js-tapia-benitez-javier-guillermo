import { RutaListaRolesComponent } from './rutas/ruta-lista-roles/ruta-lista-roles.component';
import { RutaListaProvinciasComponent } from './rutas/ruta-lista-provincias/ruta-lista-provincias.component';
import { RutaListaRefugiosComponent } from './rutas/ruta-lista-refugios/ruta-lista-refugios.component';
import { RutaListaPeticionesPendientesComponent } from './rutas/ruta-lista-peticiones-pendientes/ruta-lista-peticiones-pendientes.component';
import { RutaListaPeticionesComponent } from './rutas/ruta-lista-peticiones/ruta-lista-peticiones.component';
import { RutaListaRazasComponent } from './rutas/ruta-lista-razas/ruta-lista-razas.component';
import { RutaListaEspeciesComponent } from './rutas/ruta-lista-especies/ruta-lista-especies.component';
import { RutaListaFotografiasMascotasComponent } from './rutas/ruta-lista-fotografias-mascotas/ruta-lista-fotografias-mascotas.component';
import { RutaListaRefugiosMascotasComponent } from './rutas/ruta-lista-refugios-mascotas/ruta-lista-refugios-mascotas.component';
import { RutaListaMascotasComponent } from './rutas/ruta-lista-mascotas/ruta-lista-mascotas.component';
import { RutaListaTarjetasComponent } from './rutas/ruta-lista-tarjetas/ruta-lista-tarjetas.component';
import { RutaListaDonacionesComponent } from './rutas/ruta-lista-donaciones/ruta-lista-donaciones.component';
import { RutaListaRolesUsuariosComponent } from './rutas/ruta-lista-roles-usuarios/ruta-lista-roles-usuarios.component';
import { RutaListaUsuariosComponent } from './rutas/ruta-lista-usuarios/ruta-lista-usuarios.component';
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
    path: 'usuarios',
    children: [
      {
        component: RutaListaUsuariosComponent,
        path: 'lista-usuarios'
      },
      {
        component: RutaListaRolesUsuariosComponent,
        path: 'lista-roles-usuarios'
      },
      {
        component: RutaListaDonacionesComponent,
        path: 'lista-donaciones'
      },
      {
        component: RutaListaTarjetasComponent,
        path: 'lista-tarjetas'
      },
      {
        path: '',
        redirectTo: 'lista-usuarios',
        pathMatch: 'full'
      }
    ]
  },
  {
    component: RutaMascotasComponent,
    path: 'mascotas',
    children: [
      {
        component: RutaListaMascotasComponent,
        path: 'lista-mascotas'
      },
      {
        component: RutaListaRefugiosMascotasComponent,
        path: 'lista-refugios-mascotas'
      },
      {
        component: RutaListaFotografiasMascotasComponent,
        path: 'lista-fotografias-mascotas'
      },
      {
        component: RutaListaEspeciesComponent,
        path: 'lista-especies'
      },
      {
        component: RutaListaRazasComponent,
        path: 'lista-razas'
      },
      {
        path: '',
        redirectTo: 'lista-mascotas',
        pathMatch: 'full'
      }
    ]
  },
  {
    component: RutaPeticionesComponent,
    path: 'peticiones',
    children: [
      {
        component: RutaListaPeticionesComponent,
        path: 'lista-peticiones'
      },
      {
        component: RutaListaPeticionesPendientesComponent,
        path: 'lista-peticiones-pendientes'
      },
      {
        path: '',
        redirectTo: 'lista-peticiones',
        pathMatch: 'full'
      }
    ]
  },
  {
    component: RutaRefugiosComponent,
    path: 'refugios',
    children: [
      {
        component: RutaListaRefugiosComponent,
        path: 'lista-refugios'
      },
      {
        component: RutaListaProvinciasComponent,
        path: 'lista-provincias'
      },
      {
        path: '',
        redirectTo: 'lista-refugios',
        pathMatch: 'full'
      }
    ]
  },
  {
    component: RutaRolesComponent,
    path: 'roles',
    children: [
      {
        component: RutaListaRolesComponent,
        path: 'lista-roles'
      },
      {
        path: '',
        redirectTo: 'lista-roles',
        pathMatch: 'full'
      }
    ]
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

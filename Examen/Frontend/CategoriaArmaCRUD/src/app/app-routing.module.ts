import { RutaEditarArmaComponent } from './routes/rutas-arma/ruta-editar-arma/ruta-editar-arma.component';
import { RutaCrearArmaComponent } from './routes/rutas-arma/ruta-crear-arma/ruta-crear-arma.component';
import { RutaListaArmaComponent } from './routes/rutas-arma/ruta-lista-arma/ruta-lista-arma.component';
import { RutaEditarCategoriaComponent } from './routes/rutas-categoria/ruta-editar-categoria/ruta-editar-categoria.component';
import { RutaCrearCategoriaComponent } from './routes/rutas-categoria/ruta-crear-categoria/ruta-crear-categoria.component';
import { RutaListaCategoriaComponent } from './routes/rutas-categoria/ruta-lista-categoria/ruta-lista-categoria.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    component: RutaListaCategoriaComponent,
    path: 'lista-categoria',
  },
  {
    component: RutaCrearCategoriaComponent,
    path: 'crear-categoria',
  },
  {
    component: RutaEditarCategoriaComponent,
    path: 'editar-categoria/:id',
  },
  {
    component: RutaListaArmaComponent,
    path: 'lista-arma',
  },
  {
    component: RutaCrearArmaComponent,
    path: 'crear-arma',
  },
  {
    component: RutaEditarArmaComponent,
    path: 'editar-arma/:id',
  },
  {
    path: '',
    redirectTo: '/lista-categoria',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

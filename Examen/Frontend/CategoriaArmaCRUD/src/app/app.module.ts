import { ArmaService } from './services/http/arma.service';
import { CategoriaService } from './services/http/categoria.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RutaListaCategoriaComponent } from './routes/rutas-categoria/ruta-lista-categoria/ruta-lista-categoria.component';
import { RutaCrearCategoriaComponent } from './routes/rutas-categoria/ruta-crear-categoria/ruta-crear-categoria.component';
import { RutaEditarCategoriaComponent } from './routes/rutas-categoria/ruta-editar-categoria/ruta-editar-categoria.component';
import { FormularioCategoriaComponent } from './components/forms/formulario-categoria/formulario-categoria.component';
import { FormularioArmaComponent } from './components/forms/formulario-arma/formulario-arma.component';
import { RutaListaArmaComponent } from './routes/rutas-arma/ruta-lista-arma/ruta-lista-arma.component';
import { RutaCrearArmaComponent } from './routes/rutas-arma/ruta-crear-arma/ruta-crear-arma.component';
import { RutaEditarArmaComponent } from './routes/rutas-arma/ruta-editar-arma/ruta-editar-arma.component';

@NgModule({
  declarations: [
    AppComponent,
    RutaListaCategoriaComponent,
    RutaCrearCategoriaComponent,
    RutaEditarCategoriaComponent,
    FormularioCategoriaComponent,
    FormularioArmaComponent,
    RutaListaArmaComponent,
    RutaCrearArmaComponent,
    RutaEditarArmaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
  ],
  providers: [
    CategoriaService,
    ArmaService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartaPeliculaComponent } from './componentes/carta-pelicula/carta-pelicula.component';
import { UsuarioService } from './servicios/http/usuario.service'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ // Componentes
    AppComponent,
    CartaPeliculaComponent
  ],
  imports: [ // Modulo que vamos a usar
    BrowserModule, // -> Importa el NGFOR y NGIF
    AppRoutingModule,
    HttpClientModule, // -> Importa el HttpClient
  ],
  providers: [ // Servicios
    UsuarioService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

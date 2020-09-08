import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-carta-pelicula',
  templateUrl: './carta-pelicula.component.html',
  styleUrls: ['./carta-pelicula.component.css']
})
export class CartaPeliculaComponent implements OnInit, OnDestroy {

  @Input()
  urlImagen: string;

  @Input()
  descripcion: string;

  @Input()
  nombreBoton: string;

  @Output()
  eventoDioClicEnBoton: EventEmitter<boolean> = new EventEmitter<boolean>()

  @Output()
  eventoDioClicEnImagen: EventEmitter<boolean> = new EventEmitter<boolean>()

  urlEjemploImagen = 'https://4.bp.blogspot.com/-AW6fFVemtro/UcIVsXqah1I/AAAAAAAAABY/pikV48uCK3k/s1600/la-huerfana_portada.jpg';
  linkTextoEjemplo = 'https://www.google.com.ec'
  textoEjemplo = 'Adrian';

  constructor() {
    console.log('Constructor');
  }

  ngOnInit(): void {
    console.log('INIT');
    // Logica Inicial del componente
  }

  ngOnDestroy(): void {
    console.log('Destroy');
    // Desuscribimos de todas las subscriciones
  }


  ejemploFuncion() {
    alert('HOLA!');
  }

  eventoOnBlur() {
    console.log('Blur');
  }

  ejecutarEventoDioClic() {
    this.eventoDioClicEnBoton.emit(true);
  }

  ejecutarEventoDioClicImagen() {
    this.eventoDioClicEnImagen.emit(true);
  }
}

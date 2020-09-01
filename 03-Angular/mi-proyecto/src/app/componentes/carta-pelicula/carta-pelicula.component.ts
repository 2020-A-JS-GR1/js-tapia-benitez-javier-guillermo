import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carta-pelicula',
  templateUrl: './carta-pelicula.component.html',
  styleUrls: ['./carta-pelicula.component.css']
})
export class CartaPeliculaComponent implements OnInit {

  @Input()
  urlImagen: string;

  @Input()
  descripcion: string;

  @Input()
  nombreBoton: string;

  urlEjemploImagen = 'https://4.bp.blogspot.com/-AW6fFVemtro/UcIVsXqah1I/AAAAAAAAABY/pikV48uCK3k/s1600/la-huerfana_portada.jpg';
  linkTextoEjemplo = 'https://www.google.com.ec'
  textoEjemplo = 'Adrian';

  constructor() { }

  ngOnInit(): void {
  }

  ejemploFuncion() {
    alert('HOLA!');
  }

  eventoOnBlur() {
    console.log('Blur');
  }

}

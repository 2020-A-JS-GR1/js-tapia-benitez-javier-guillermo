import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-pagina',
  templateUrl: './pie-pagina.component.html',
  styleUrls: ['./pie-pagina.component.css']
})
export class PiePaginaComponent implements OnInit {

  urlLogo = '../../../assets/img/Logo.png';
  urlPieImagen = '../../../assets/img/jamie-street-UtrE5DcgEyg-unsplash.jpg';
  urlInstagram = '../../../assets/img/instagram.png'
  urlFacebook = '../../../assets/img/facebook.png'
  urlGithub = '../../../assets/img/github.png'
  urlTwitter = '../../../assets/img/twitter.png'
  urlYoutube = '../../../assets/img/youtube.png'

  constructor() { }

  ngOnInit(): void {
  }

}

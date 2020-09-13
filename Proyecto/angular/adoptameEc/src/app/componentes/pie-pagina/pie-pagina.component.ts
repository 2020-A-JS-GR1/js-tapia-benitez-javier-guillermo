import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-pagina',
  templateUrl: './pie-pagina.component.html',
  styleUrls: ['./pie-pagina.component.css']
})
export class PiePaginaComponent implements OnInit {

  @Input()
  rutas: Object;

  urlLogo = '../../../assets/img/Logo.png';
  urlPieImagen = '../../../assets/img/jamie-street-UtrE5DcgEyg-unsplash.jpg';
  urlInstagram = '../../../assets/img/instagram.png'
  urlFacebook = '../../../assets/img/facebook.png'
  urlGithub = '../../../assets/img/github.png'
  urlTwitter = '../../../assets/img/twitter.png'
  urlYoutube = '../../../assets/img/youtube.png'
  urlInstagramPage = 'https://www.instagram.com/paeecuador/';
  urlFacebookPage = 'https://www.facebook.com/pae.ec/';
  urlTwitterPage = 'https://twitter.com/PAEecuador';
  urlYoutubePage = 'https://www.youtube.com/channel/UC-XHlNHMi1Z7nqQchw1HoWA';
  urlGithubPage = 'https://github.com/2020-A-JS-GR1/js-tapia-benitez-javier-guillermo/tree/master/Proyecto';

  constructor() { }

  ngOnInit(): void {
  }

}

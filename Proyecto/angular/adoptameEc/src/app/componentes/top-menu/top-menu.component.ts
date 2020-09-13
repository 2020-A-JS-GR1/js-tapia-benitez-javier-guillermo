import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  @Input()
  rutas: Object;

  @Input()
  backgroundColor: Object;

  constructor() { }

  ngOnInit(): void {
  }

}

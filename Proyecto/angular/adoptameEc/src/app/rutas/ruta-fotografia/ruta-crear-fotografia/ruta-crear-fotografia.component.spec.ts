import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCrearFotografiaComponent } from './ruta-crear-fotografia.component';

describe('RutaCrearFotografiaComponent', () => {
  let component: RutaCrearFotografiaComponent;
  let fixture: ComponentFixture<RutaCrearFotografiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaCrearFotografiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaCrearFotografiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

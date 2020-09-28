import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCrearCategoriaComponent } from './ruta-crear-categoria.component';

describe('RutaCrearCategoriaComponent', () => {
  let component: RutaCrearCategoriaComponent;
  let fixture: ComponentFixture<RutaCrearCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaCrearCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaCrearCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

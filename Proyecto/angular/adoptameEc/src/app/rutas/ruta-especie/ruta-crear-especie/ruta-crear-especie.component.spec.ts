import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCrearEspecieComponent } from './ruta-crear-especie.component';

describe('RutaCrearEspecieComponent', () => {
  let component: RutaCrearEspecieComponent;
  let fixture: ComponentFixture<RutaCrearEspecieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaCrearEspecieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaCrearEspecieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

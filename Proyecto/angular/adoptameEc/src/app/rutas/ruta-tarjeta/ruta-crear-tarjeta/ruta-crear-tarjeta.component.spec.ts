import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCrearTarjetaComponent } from './ruta-crear-tarjeta.component';

describe('RutaCrearTarjetaComponent', () => {
  let component: RutaCrearTarjetaComponent;
  let fixture: ComponentFixture<RutaCrearTarjetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaCrearTarjetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaCrearTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

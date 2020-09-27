import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEditarTarjetaComponent } from './ruta-editar-tarjeta.component';

describe('RutaEditarTarjetaComponent', () => {
  let component: RutaEditarTarjetaComponent;
  let fixture: ComponentFixture<RutaEditarTarjetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaEditarTarjetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEditarTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

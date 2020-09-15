import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaListaPeticionesPendientesComponent } from './ruta-lista-peticiones-pendientes.component';

describe('RutaListaPeticionesPendientesComponent', () => {
  let component: RutaListaPeticionesPendientesComponent;
  let fixture: ComponentFixture<RutaListaPeticionesPendientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaListaPeticionesPendientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaListaPeticionesPendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

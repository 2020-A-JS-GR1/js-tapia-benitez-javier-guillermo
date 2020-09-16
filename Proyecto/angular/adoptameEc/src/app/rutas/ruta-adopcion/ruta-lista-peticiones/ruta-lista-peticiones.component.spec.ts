import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaListaPeticionesComponent } from './ruta-lista-peticiones.component';

describe('RutaListaPeticionesComponent', () => {
  let component: RutaListaPeticionesComponent;
  let fixture: ComponentFixture<RutaListaPeticionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaListaPeticionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaListaPeticionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

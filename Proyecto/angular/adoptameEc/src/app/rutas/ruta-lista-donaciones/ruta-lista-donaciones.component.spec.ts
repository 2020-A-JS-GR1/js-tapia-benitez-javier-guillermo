import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaListaDonacionesComponent } from './ruta-lista-donaciones.component';

describe('RutaListaDonacionesComponent', () => {
  let component: RutaListaDonacionesComponent;
  let fixture: ComponentFixture<RutaListaDonacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaListaDonacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaListaDonacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEstadisticasComponent } from './ruta-estadisticas.component';

describe('RutaEstadisticasComponent', () => {
  let component: RutaEstadisticasComponent;
  let fixture: ComponentFixture<RutaEstadisticasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaEstadisticasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEstadisticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

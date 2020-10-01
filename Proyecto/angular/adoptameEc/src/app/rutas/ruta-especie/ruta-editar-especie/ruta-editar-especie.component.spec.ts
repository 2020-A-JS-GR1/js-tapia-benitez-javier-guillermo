import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEditarEspecieComponent } from './ruta-editar-especie.component';

describe('RutaEditarEspecieComponent', () => {
  let component: RutaEditarEspecieComponent;
  let fixture: ComponentFixture<RutaEditarEspecieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaEditarEspecieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEditarEspecieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

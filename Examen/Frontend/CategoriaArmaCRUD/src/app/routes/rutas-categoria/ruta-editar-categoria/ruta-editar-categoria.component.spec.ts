import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEditarCategoriaComponent } from './ruta-editar-categoria.component';

describe('RutaEditarCategoriaComponent', () => {
  let component: RutaEditarCategoriaComponent;
  let fixture: ComponentFixture<RutaEditarCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaEditarCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEditarCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

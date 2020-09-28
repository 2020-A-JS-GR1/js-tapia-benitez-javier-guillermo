import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaListaCategoriaComponent } from './ruta-lista-categoria.component';

describe('RutaListaCategoriaComponent', () => {
  let component: RutaListaCategoriaComponent;
  let fixture: ComponentFixture<RutaListaCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaListaCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaListaCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaListaUsuariosComponent } from './ruta-lista-usuarios.component';

describe('RutaListaUsuariosComponent', () => {
  let component: RutaListaUsuariosComponent;
  let fixture: ComponentFixture<RutaListaUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaListaUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaListaUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

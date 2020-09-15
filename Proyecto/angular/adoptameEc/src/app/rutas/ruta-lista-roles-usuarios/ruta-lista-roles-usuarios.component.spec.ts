import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaListaRolesUsuariosComponent } from './ruta-lista-roles-usuarios.component';

describe('RutaListaRolesUsuariosComponent', () => {
  let component: RutaListaRolesUsuariosComponent;
  let fixture: ComponentFixture<RutaListaRolesUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaListaRolesUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaListaRolesUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

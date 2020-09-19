import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEditarRolUsuarioComponent } from './ruta-editar-rol-usuario.component';

describe('RutaEditarRolUsuarioComponent', () => {
  let component: RutaEditarRolUsuarioComponent;
  let fixture: ComponentFixture<RutaEditarRolUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaEditarRolUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEditarRolUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

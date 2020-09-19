import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCrearRolUsuarioComponent } from './ruta-crear-rol-usuario.component';

describe('RutaCrearRolUsuarioComponent', () => {
  let component: RutaCrearRolUsuarioComponent;
  let fixture: ComponentFixture<RutaCrearRolUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaCrearRolUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaCrearRolUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

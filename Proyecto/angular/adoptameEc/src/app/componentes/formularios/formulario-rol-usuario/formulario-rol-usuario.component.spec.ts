import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioRolUsuarioComponent } from './formulario-rol-usuario.component';

describe('FormularioRolUsuarioComponent', () => {
  let component: FormularioRolUsuarioComponent;
  let fixture: ComponentFixture<FormularioRolUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioRolUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioRolUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

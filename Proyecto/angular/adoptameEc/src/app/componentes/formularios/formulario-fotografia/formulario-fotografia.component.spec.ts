import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioFotografiaComponent } from './formulario-fotografia.component';

describe('FormularioFotografiaComponent', () => {
  let component: FormularioFotografiaComponent;
  let fixture: ComponentFixture<FormularioFotografiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioFotografiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioFotografiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

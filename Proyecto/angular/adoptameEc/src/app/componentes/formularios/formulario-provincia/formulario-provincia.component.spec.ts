import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioProvinciaComponent } from './formulario-provincia.component';

describe('FormularioProvinciaComponent', () => {
  let component: FormularioProvinciaComponent;
  let fixture: ComponentFixture<FormularioProvinciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioProvinciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioProvinciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEspecieComponent } from './formulario-especie.component';

describe('FormularioEspecieComponent', () => {
  let component: FormularioEspecieComponent;
  let fixture: ComponentFixture<FormularioEspecieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioEspecieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioEspecieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

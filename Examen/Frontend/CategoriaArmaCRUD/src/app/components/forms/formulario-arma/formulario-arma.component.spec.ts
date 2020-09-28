import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioArmaComponent } from './formulario-arma.component';

describe('FormularioArmaComponent', () => {
  let component: FormularioArmaComponent;
  let fixture: ComponentFixture<FormularioArmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioArmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioArmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

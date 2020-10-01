import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioRefugioComponent } from './formulario-refugio.component';

describe('FormularioRefugioComponent', () => {
  let component: FormularioRefugioComponent;
  let fixture: ComponentFixture<FormularioRefugioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioRefugioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioRefugioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

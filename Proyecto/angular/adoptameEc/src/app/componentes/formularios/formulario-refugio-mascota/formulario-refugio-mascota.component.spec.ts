import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioRefugioMascotaComponent } from './formulario-refugio-mascota.component';

describe('FormularioRefugioMascotaComponent', () => {
  let component: FormularioRefugioMascotaComponent;
  let fixture: ComponentFixture<FormularioRefugioMascotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioRefugioMascotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioRefugioMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

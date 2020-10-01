import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEditarMascotaComponent } from './ruta-editar-mascota.component';

describe('RutaEditarMascotaComponent', () => {
  let component: RutaEditarMascotaComponent;
  let fixture: ComponentFixture<RutaEditarMascotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaEditarMascotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEditarMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

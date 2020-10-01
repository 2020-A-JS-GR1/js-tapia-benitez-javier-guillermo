import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCrearMascotaComponent } from './ruta-crear-mascota.component';

describe('RutaCrearMascotaComponent', () => {
  let component: RutaCrearMascotaComponent;
  let fixture: ComponentFixture<RutaCrearMascotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaCrearMascotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaCrearMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCrearRefugioMascotaComponent } from './ruta-crear-refugio-mascota.component';

describe('RutaCrearRefugioMascotaComponent', () => {
  let component: RutaCrearRefugioMascotaComponent;
  let fixture: ComponentFixture<RutaCrearRefugioMascotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaCrearRefugioMascotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaCrearRefugioMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

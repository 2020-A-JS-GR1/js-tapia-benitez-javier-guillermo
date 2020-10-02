import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEditarRefugioMascotaComponent } from './ruta-editar-refugio-mascota.component';

describe('RutaEditarRefugioMascotaComponent', () => {
  let component: RutaEditarRefugioMascotaComponent;
  let fixture: ComponentFixture<RutaEditarRefugioMascotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaEditarRefugioMascotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEditarRefugioMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

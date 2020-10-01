import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEditarRazaComponent } from './ruta-editar-raza.component';

describe('RutaEditarRazaComponent', () => {
  let component: RutaEditarRazaComponent;
  let fixture: ComponentFixture<RutaEditarRazaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaEditarRazaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEditarRazaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

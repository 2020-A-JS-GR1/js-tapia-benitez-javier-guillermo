import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaListaFotografiasMascotasComponent } from './ruta-lista-fotografias-mascotas.component';

describe('RutaListaFotografiasMascotasComponent', () => {
  let component: RutaListaFotografiasMascotasComponent;
  let fixture: ComponentFixture<RutaListaFotografiasMascotasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaListaFotografiasMascotasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaListaFotografiasMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

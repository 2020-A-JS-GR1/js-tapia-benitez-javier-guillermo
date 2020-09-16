import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaListaRefugiosMascotasComponent } from './ruta-lista-refugios-mascotas.component';

describe('RutaListaRefugiosMascotasComponent', () => {
  let component: RutaListaRefugiosMascotasComponent;
  let fixture: ComponentFixture<RutaListaRefugiosMascotasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaListaRefugiosMascotasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaListaRefugiosMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

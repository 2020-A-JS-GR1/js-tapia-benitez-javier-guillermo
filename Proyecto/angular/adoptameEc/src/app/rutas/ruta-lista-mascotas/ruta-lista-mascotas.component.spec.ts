import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaListaMascotasComponent } from './ruta-lista-mascotas.component';

describe('RutaListaMascotasComponent', () => {
  let component: RutaListaMascotasComponent;
  let fixture: ComponentFixture<RutaListaMascotasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaListaMascotasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaListaMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

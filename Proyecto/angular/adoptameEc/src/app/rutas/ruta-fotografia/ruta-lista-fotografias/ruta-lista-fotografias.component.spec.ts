import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaListaFotografiasComponent } from './ruta-lista-fotografias.component';

describe('RutaListaFotografiasMascotasComponent', () => {
  let component: RutaListaFotografiasComponent;
  let fixture: ComponentFixture<RutaListaFotografiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaListaFotografiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaListaFotografiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

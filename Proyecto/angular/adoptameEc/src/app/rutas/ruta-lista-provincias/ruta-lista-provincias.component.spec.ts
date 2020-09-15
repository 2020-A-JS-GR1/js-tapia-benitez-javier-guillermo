import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaListaProvinciasComponent } from './ruta-lista-provincias.component';

describe('RutaListaProvinciasComponent', () => {
  let component: RutaListaProvinciasComponent;
  let fixture: ComponentFixture<RutaListaProvinciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaListaProvinciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaListaProvinciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

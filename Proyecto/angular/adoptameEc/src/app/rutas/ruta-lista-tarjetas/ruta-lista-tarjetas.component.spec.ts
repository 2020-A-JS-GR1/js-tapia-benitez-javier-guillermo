import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaListaTarjetasComponent } from './ruta-lista-tarjetas.component';

describe('RutaListaTarjetasComponent', () => {
  let component: RutaListaTarjetasComponent;
  let fixture: ComponentFixture<RutaListaTarjetasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaListaTarjetasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaListaTarjetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

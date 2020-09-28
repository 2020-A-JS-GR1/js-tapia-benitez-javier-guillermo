import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaListaArmaComponent } from './ruta-lista-arma.component';

describe('RutaListaArmaComponent', () => {
  let component: RutaListaArmaComponent;
  let fixture: ComponentFixture<RutaListaArmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaListaArmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaListaArmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

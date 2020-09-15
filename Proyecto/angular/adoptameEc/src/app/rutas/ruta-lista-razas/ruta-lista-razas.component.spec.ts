import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaListaRazasComponent } from './ruta-lista-razas.component';

describe('RutaListaRazasComponent', () => {
  let component: RutaListaRazasComponent;
  let fixture: ComponentFixture<RutaListaRazasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaListaRazasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaListaRazasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

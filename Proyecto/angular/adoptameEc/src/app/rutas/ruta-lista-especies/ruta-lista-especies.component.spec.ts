import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaListaEspeciesComponent } from './ruta-lista-especies.component';

describe('RutaListaEspeciesComponent', () => {
  let component: RutaListaEspeciesComponent;
  let fixture: ComponentFixture<RutaListaEspeciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaListaEspeciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaListaEspeciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

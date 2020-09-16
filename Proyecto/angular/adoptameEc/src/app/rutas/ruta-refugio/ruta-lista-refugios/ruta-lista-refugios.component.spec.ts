import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaListaRefugiosComponent } from './ruta-lista-refugios.component';

describe('RutaListaRefugiosComponent', () => {
  let component: RutaListaRefugiosComponent;
  let fixture: ComponentFixture<RutaListaRefugiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaListaRefugiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaListaRefugiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

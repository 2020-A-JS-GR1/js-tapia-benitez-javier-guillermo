import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEditarFotografiaComponent } from './ruta-editar-fotografia.component';

describe('RutaEditarFotografiaComponent', () => {
  let component: RutaEditarFotografiaComponent;
  let fixture: ComponentFixture<RutaEditarFotografiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaEditarFotografiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEditarFotografiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

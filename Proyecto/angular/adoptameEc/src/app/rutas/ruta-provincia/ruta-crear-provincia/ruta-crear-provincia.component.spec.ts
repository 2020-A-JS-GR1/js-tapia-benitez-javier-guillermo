import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCrearProvinciaComponent } from './ruta-crear-provincia.component';

describe('RutaCrearProvinciaComponent', () => {
  let component: RutaCrearProvinciaComponent;
  let fixture: ComponentFixture<RutaCrearProvinciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaCrearProvinciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaCrearProvinciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

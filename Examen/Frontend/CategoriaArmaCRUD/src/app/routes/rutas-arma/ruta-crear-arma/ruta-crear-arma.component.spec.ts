import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCrearArmaComponent } from './ruta-crear-arma.component';

describe('RutaCrearArmaComponent', () => {
  let component: RutaCrearArmaComponent;
  let fixture: ComponentFixture<RutaCrearArmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaCrearArmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaCrearArmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

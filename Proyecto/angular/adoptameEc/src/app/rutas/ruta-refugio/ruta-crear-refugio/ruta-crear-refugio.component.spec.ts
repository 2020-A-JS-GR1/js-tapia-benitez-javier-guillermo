import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCrearRefugioComponent } from './ruta-crear-refugio.component';

describe('RutaCrearRefugioComponent', () => {
  let component: RutaCrearRefugioComponent;
  let fixture: ComponentFixture<RutaCrearRefugioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaCrearRefugioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaCrearRefugioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

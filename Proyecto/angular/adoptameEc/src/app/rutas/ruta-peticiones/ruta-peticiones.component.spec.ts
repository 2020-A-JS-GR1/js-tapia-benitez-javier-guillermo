import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaPeticionesComponent } from './ruta-peticiones.component';

describe('RutaPeticionesComponent', () => {
  let component: RutaPeticionesComponent;
  let fixture: ComponentFixture<RutaPeticionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaPeticionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaPeticionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

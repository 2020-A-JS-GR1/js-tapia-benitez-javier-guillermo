import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEditarArmaComponent } from './ruta-editar-arma.component';

describe('RutaEditarArmaComponent', () => {
  let component: RutaEditarArmaComponent;
  let fixture: ComponentFixture<RutaEditarArmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaEditarArmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEditarArmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

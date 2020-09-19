import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEditarProvinciaComponent } from './ruta-editar-provincia.component';

describe('RutaEditarProvinciaComponent', () => {
  let component: RutaEditarProvinciaComponent;
  let fixture: ComponentFixture<RutaEditarProvinciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaEditarProvinciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEditarProvinciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

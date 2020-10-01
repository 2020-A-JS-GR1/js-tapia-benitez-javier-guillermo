import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEditarRefugioComponent } from './ruta-editar-refugio.component';

describe('RutaEditarRefugioComponent', () => {
  let component: RutaEditarRefugioComponent;
  let fixture: ComponentFixture<RutaEditarRefugioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaEditarRefugioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEditarRefugioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

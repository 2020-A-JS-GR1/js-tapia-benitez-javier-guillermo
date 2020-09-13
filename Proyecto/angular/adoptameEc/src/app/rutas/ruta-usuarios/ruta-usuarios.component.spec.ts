import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaUsuariosComponent } from './ruta-usuarios.component';

describe('RutaUsuariosComponent', () => {
  let component: RutaUsuariosComponent;
  let fixture: ComponentFixture<RutaUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

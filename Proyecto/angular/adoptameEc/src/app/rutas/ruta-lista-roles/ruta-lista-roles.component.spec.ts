import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaListaRolesComponent } from './ruta-lista-roles.component';

describe('RutaListaRolesComponent', () => {
  let component: RutaListaRolesComponent;
  let fixture: ComponentFixture<RutaListaRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaListaRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaListaRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

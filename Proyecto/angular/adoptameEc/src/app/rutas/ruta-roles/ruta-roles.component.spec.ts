import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaRolesComponent } from './ruta-roles.component';

describe('RutaRolesComponent', () => {
  let component: RutaRolesComponent;
  let fixture: ComponentFixture<RutaRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

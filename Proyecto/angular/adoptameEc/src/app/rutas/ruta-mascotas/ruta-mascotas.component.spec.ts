import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaMascotasComponent } from './ruta-mascotas.component';

describe('RutaMascotasComponent', () => {
  let component: RutaMascotasComponent;
  let fixture: ComponentFixture<RutaMascotasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaMascotasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

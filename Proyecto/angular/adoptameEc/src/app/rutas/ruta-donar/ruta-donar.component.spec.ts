import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaDonarComponent } from './ruta-donar.component';

describe('RutaDonarComponent', () => {
  let component: RutaDonarComponent;
  let fixture: ComponentFixture<RutaDonarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaDonarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaDonarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

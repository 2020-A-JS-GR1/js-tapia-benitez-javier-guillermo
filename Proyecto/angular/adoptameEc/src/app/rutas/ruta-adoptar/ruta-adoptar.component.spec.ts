import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaAdoptarComponent } from './ruta-adoptar.component';

describe('RutaAdoptarComponent', () => {
  let component: RutaAdoptarComponent;
  let fixture: ComponentFixture<RutaAdoptarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaAdoptarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaAdoptarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaRefugiosComponent } from './ruta-refugios.component';

describe('RutaRefugiosComponent', () => {
  let component: RutaRefugiosComponent;
  let fixture: ComponentFixture<RutaRefugiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaRefugiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaRefugiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

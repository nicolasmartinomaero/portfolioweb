import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncabezadosComponent } from './encabezados.component';

describe('EncabezadosComponent', () => {
  let component: EncabezadosComponent;
  let fixture: ComponentFixture<EncabezadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncabezadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncabezadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

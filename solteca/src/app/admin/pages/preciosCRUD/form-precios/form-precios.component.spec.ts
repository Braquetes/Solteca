import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPreciosComponent } from './form-precios.component';

describe('FormPreciosComponent', () => {
  let component: FormPreciosComponent;
  let fixture: ComponentFixture<FormPreciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPreciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPreciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

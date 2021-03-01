import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderVentanillaComponent } from './header-ventanilla.component';

describe('HeaderVentanillaComponent', () => {
  let component: HeaderVentanillaComponent;
  let fixture: ComponentFixture<HeaderVentanillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderVentanillaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderVentanillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

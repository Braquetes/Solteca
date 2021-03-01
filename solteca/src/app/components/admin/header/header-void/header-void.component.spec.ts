import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderVoidComponent } from './header-void.component';

describe('HeaderVoidComponent', () => {
  let component: HeaderVoidComponent;
  let fixture: ComponentFixture<HeaderVoidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderVoidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderVoidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

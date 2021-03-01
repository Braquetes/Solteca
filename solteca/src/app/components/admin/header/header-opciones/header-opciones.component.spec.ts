import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderOpcionesComponent } from './header-opciones.component';

describe('HeaderOpcionesComponent', () => {
  let component: HeaderOpcionesComponent;
  let fixture: ComponentFixture<HeaderOpcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderOpcionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderOpcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

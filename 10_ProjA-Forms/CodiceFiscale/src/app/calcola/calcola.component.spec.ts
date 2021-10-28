import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcolaComponent } from './calcola.component';

describe('CalcolaComponent', () => {
  let component: CalcolaComponent;
  let fixture: ComponentFixture<CalcolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcolaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

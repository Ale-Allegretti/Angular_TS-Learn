import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratoComponent } from './generato.component';

describe('GeneratoComponent', () => {
  let component: GeneratoComponent;
  let fixture: ComponentFixture<GeneratoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneratoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

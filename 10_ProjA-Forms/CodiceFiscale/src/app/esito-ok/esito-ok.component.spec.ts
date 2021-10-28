import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsitoOkComponent } from './esito-ok.component';

describe('EsitoOkComponent', () => {
  let component: EsitoOkComponent;
  let fixture: ComponentFixture<EsitoOkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsitoOkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsitoOkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

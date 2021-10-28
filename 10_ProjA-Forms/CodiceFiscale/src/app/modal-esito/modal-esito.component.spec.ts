import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEsitoComponent } from './modal-esito.component';

describe('ModalEsitoComponent', () => {
  let component: ModalEsitoComponent;
  let fixture: ComponentFixture<ModalEsitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEsitoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEsitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

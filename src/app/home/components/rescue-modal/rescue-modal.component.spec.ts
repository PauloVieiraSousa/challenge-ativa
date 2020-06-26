import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RescueModalComponent } from './rescue-modal.component';

describe('RescueModalComponent', () => {
  let component: RescueModalComponent;
  let fixture: ComponentFixture<RescueModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RescueModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RescueModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

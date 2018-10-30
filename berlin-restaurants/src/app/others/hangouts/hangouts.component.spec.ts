import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HangoutsComponent } from './hangouts.component';

describe('HangoutsComponent', () => {
  let component: HangoutsComponent;
  let fixture: ComponentFixture<HangoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HangoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HangoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

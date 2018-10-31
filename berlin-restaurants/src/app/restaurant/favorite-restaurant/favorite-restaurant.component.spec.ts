import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteRestaurantComponent } from './favorite-restaurant.component';

describe('FavoriteRestaurantComponent', () => {
  let component: FavoriteRestaurantComponent;
  let fixture: ComponentFixture<FavoriteRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteRestaurantComponent } from './favorite-restaurant.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';

describe('FavoriteRestaurantComponent', () => {
  let component: FavoriteRestaurantComponent;
  let fixture: ComponentFixture<FavoriteRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FavoriteRestaurantComponent],
      imports: [
        RouterTestingModule.withRoutes([]),
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        SharedModule
      ],
    }).compileComponents();
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
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { ListComponent } from "./list.component";
import { FavoriteRestaurantComponent } from "../favorite-restaurant/favorite-restaurant.component";
import { ItemComponent } from "../item/item.component";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { RestaurantService } from "../restaurant.service";
import { RestaurantRecord } from "src/app/restaurant-record.interface";
import { of } from "rxjs";
import { HttpClientModule } from "@angular/common/http";
import { By } from "@angular/platform-browser";

describe("ListComponent", () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent, FavoriteRestaurantComponent, ItemComponent],
      imports: [
        RouterTestingModule.withRoutes([]),
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        SharedModule
      ],
      providers: [
        {
          provide: RestaurantService,
          useValue: {
            getRestaurants() {
              const restaurants: Array<RestaurantRecord> = [
                { name: "r1", address: "a1", location: "b1" },
                { name: "r1", address: "a1", location: "b1" }
              ];
              return of(restaurants);
            }
          }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    console.log("component", component);
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render 2 items", () => {
    //console.log("component", component);
    component.ngOnInit();
    fixture.detectChanges();
    const template = fixture.debugElement.nativeElement;
    expect(template.querySelectorAll("blr-item").length).toBe(2);
  });

  it("should render h2 with right color based on type length", () => {
    fixture.detectChanges();
    const template = fixture.debugElement.nativeElement;
    expect(template.querySelector("h2").style.color).toBe("green");
    component.type = "lengthy type value";
    fixture.detectChanges();
    expect(template.querySelector("h2").style.color).toBe("red");
  });
});

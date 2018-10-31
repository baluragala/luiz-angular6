import { Component, OnInit, Inject, InjectionToken } from "@angular/core";
import { RestaurantService } from "../restaurant.service";
import { Restaurant2Service } from "../restaurant2.service";
import { restaurantFactory } from "../../factory.function";
import { RestaurantRecord } from "../../restaurant-record.interface";
import { Router } from "@angular/router";

const ENV_TOKEN = new InjectionToken<string>("ENV");
@Component({
  selector: "blr-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
  providers: [
    { provide: RestaurantService, useClass: Restaurant2Service },
    { provide: ENV_TOKEN, useValue: "DEVELOPMENT" }

    // {
    //   provide: RestaurantService,
    //   useFactory: restaurantFactory,
    //   deps: ["ENV"]
    // }
  ]
})
export class ListComponent implements OnInit {
  type: string = "Top 10";
  selectedRestaurantId: number;

  restaurants: Array<RestaurantRecord>;
  constructor(
    private service: RestaurantService,
    private router: Router,
    @Inject(ENV_TOKEN) private apiKey: string
  ) {
    console.log(router);
    console.log(service, apiKey);
  }

  ngOnInit() {
    this.service
      .getRestaurants()
      .subscribe(restaurants => (this.restaurants = restaurants));
  }

  getType() {
    return this.type;
  }

  onClick(e) {
    console.log(e);
    alert("clicked...");
  }

  onMouseOver(e) {
    console.log(e);
    console.log("onMouseOver");
  }

  onSelected(restaurantId: number) {
    this.selectedRestaurantId = restaurantId;
  }
}

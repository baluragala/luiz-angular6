import { Component, OnInit, Inject } from "@angular/core";
import { RestaurantService } from "../restaurant.service";
import { Restaurant2Service } from "../restaurant2.service";
//import { restaurantFactory } from "src/app/factory.function";
import { RestaurantRecord } from "../../restaurant-record.interface";
import { Router } from "@angular/router";

@Component({
  selector: "blr-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
  providers: [
    { provide: RestaurantService, useClass: Restaurant2Service }

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
  constructor(private service: RestaurantService, private router: Router) {
    console.log(router);
    //console.log(service, apiKey);
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

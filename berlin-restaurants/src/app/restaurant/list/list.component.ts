import { Component, OnInit } from "@angular/core";
import { RestaurantService } from "../restaurant.service";
import { Restaurant2Service } from "../restaurant2.service";

@Component({
  selector: "blr-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
  providers: [{ provide: RestaurantService, useClass: Restaurant2Service }]
})
export class ListComponent implements OnInit {
  type: string = "Top 10";
  selectedRestaurantId: number;

  restaurants;
  constructor(private service: RestaurantService) {}

  ngOnInit() {
    this.restaurants = this.service.getRestaurants();
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

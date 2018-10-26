import { Component, OnInit, Inject } from "@angular/core";
import { RestaurantService } from "../restaurant.service";
import { Restaurant2Service } from "../restaurant2.service";
//import { restaurantFactory } from "src/app/factory.function";
import { RestaurantRecord } from "../../restaurant-record.interface";

@Component({
  selector: "blr-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
  providers: [
    { provide: RestaurantService, useClass: Restaurant2Service },
    { provide: "API_KEY", useValue: "2wsed45&6hgu*" },
    { provide: "API_SECRET", useValue: "3wwerd&6hgu*" },
    {
      provide: "ENV",
      useValue: "DEVELOPMENT"
    }
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
    @Inject("API_KEY") private apiKey: string
  ) {
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

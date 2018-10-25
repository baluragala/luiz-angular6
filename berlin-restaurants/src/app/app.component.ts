import { Component } from "@angular/core";
import { RestaurantService } from "./restaurant/restaurant.service";

@Component({
  selector: "blr-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "berlin-restaurants";
}

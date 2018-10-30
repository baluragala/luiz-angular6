import { Component } from "@angular/core";
import { RestaurantService } from "./restaurant/restaurant.service";
import es from "@angular/common/locales/es";
import { registerLocaleData } from "@angular/common";

@Component({
  selector: "blr-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "berlin-restaurants";

  ngOnInit() {
    registerLocaleData(es);
  }
}

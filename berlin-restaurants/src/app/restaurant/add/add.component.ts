import { Component, OnInit } from "@angular/core";
import { Restaurant2Service } from "../restaurant2.service";

@Component({
  selector: "blr-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.css"]
})
export class AddComponent implements OnInit {
  restaurantName;
  restaurantAddress;
  restaurantCategory;
  constructor(private service: Restaurant2Service) {}

  ngOnInit() {}

  onSubmit() {
    this.service
      .addRestaurant({
        name: this.restaurantName,
        address: this.restaurantAddress,
        category: this.restaurantCategory
      })
      .subscribe(r => {
        alert("Saved " + r.id);
      });
  }
}

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Restaurant2Service } from "../restaurant2.service";
import { RestaurantRecord } from "src/app/restaurant-record.interface";

@Component({
  selector: "blr-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"]
})
export class DetailComponent implements OnInit {
  restaurant: RestaurantRecord;
  constructor(
    private route: ActivatedRoute,
    private service: Restaurant2Service
  ) {}

  ngOnInit() {
    this.service
      .getRestaurantByName(this.route.snapshot.params["name"])
      .subscribe(data => {
        this.restaurant = data[0];
      });
  }
}

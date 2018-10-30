import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
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
    private service: Restaurant2Service,
    private router: Router
  ) {}

  ngOnInit() {
    console.log(this.route.snapshot.queryParams);
    this.route.queryParamMap.subscribe(map => {
      console.log(map);
    });
    this.route.paramMap.subscribe(map => {
      console.log(map);
      this.service.getRestaurantByName(map.get("name")).subscribe(data => {
        this.restaurant = data[0];
      });
    });

    // this.service
    //   .getRestaurantByName(this.route.snapshot.params["name"])
    //   .subscribe(data => {
    //     this.restaurant = data[0];
    //   });
  }
  onClick() {
    this.router.navigate(["/restaurants"], { queryParams: {} });
  }
}

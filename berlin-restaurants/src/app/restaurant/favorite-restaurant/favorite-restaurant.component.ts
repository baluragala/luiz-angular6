import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Restaurant2Service } from "../restaurant2.service";

@Component({
  selector: "blr-favorite-restaurant",
  templateUrl: "./favorite-restaurant.component.html",
  styleUrls: ["./favorite-restaurant.component.css"]
})
export class FavoriteRestaurantComponent implements OnInit {
  addForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private service: Restaurant2Service
  ) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe(q => {
      this.service.getRestaurantByName(q.get("name")).subscribe(r => {
        this.addForm.patchValue({
          name: r[0].name,
          address: r[0].address,
          category: r[0].category
        });
      });
    });
    this.addForm = new FormGroup({
      name: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)
      ]),
      address: new FormControl(""),
      category: new FormControl()
    });
  }
}

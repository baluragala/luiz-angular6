import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "blr-favorite-restaurant",
  templateUrl: "./favorite-restaurant.component.html",
  styleUrls: ["./favorite-restaurant.component.css"]
})
export class FavoriteRestaurantComponent implements OnInit {
  addForm: FormGroup;
  constructor() {}

  ngOnInit() {
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

import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "blr-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"]
})
export class ItemComponent implements OnInit {
  // {
  //   "id": 101004,
  //   "name": "La Dolce Vita",
  //   "address": "Waltersdorfer Straße 1A, Berlin, Germany",
  //   "category": "restaurant",
  //   "location": "Berlin",
  //   "lat": 52.405091,
  //   "lng": 13.57337,
  //   "details": "http://tour-pedia.org/api/getPlaceDetails?id=101004"
  //   }

  @Input()
  restaurant;

  @Input()
  sno;


  @Output()
  selected: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onClick() {
    this.selected.emit(this.restaurant.id);
  }
}

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "blr-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  type: string = "Top 10";
  selectedRestaurantId: number;

  restaurants = [
    {
      id: 101004,
      name: "La Dolce Vita",
      address: "Waltersdorfer Stra\u00dfe 1A, Berlin, Germany",
      category: "restaurant",
      location: "Berlin",
      lat: 52.405091,
      lng: 13.57337,
      details: "http://tour-pedia.org/api/getPlaceDetails?id=101004",
      budget: 80
    },
    {
      category: "restaurant",
      id: 100263,
      lat: 52.442259616828,
      lng: 13.240633765583,
      location: "Berlin",
      name: "La Dolce Vita",
      originalId: "4e209cb718a88345f0429983",
      polarity: 0,
      subCategory: "Italian Restaurant",
      details: "http://tour-pedia.org/api/getPlaceDetails?id=100263",
      budget: 120
    },
    {
      id: 324915,
      name: "La Dolce Vita",
      address: "Wilsnacker Stra\u00dfe 62, Berlin, Germany",
      category: "restaurant",
      location: "Berlin",
      lat: 52.527308,
      lng: 13.351412,
      numReviews: 1,
      reviews: "http://tour-pedia.org/api/getReviewsByPlaceId?placeId=324915",
      polarity: 0,
      details: "http://tour-pedia.org/api/getPlaceDetails?id=324915",
      budget: 90000
    }
  ];
  constructor() {}

  ngOnInit() {}

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

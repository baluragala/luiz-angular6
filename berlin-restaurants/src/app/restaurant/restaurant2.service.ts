import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RestaurantRecord } from "../restaurant-record.interface";

@Injectable({
  providedIn: "root"
})
export class Restaurant2Service {
  constructor(private http: HttpClient) {}

  getRestaurants() {
    const params = {
      category: "restaurant",
      location: "Berlin",
      source: "Facebook"
    };

    return this.http.get<Array<RestaurantRecord>>(
      "http://tour-pedia.org/api/getPlaces",
      {
        params
      }
    );
  }
}

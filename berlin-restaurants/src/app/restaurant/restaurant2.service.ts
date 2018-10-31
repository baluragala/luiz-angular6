import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RestaurantRecord } from "../restaurant-record.interface";

@Injectable({
  providedIn: "root"
})
export class Restaurant2Service {
  constructor(private http: HttpClient) {}

  getRestaurantByName(name: string) {
    return this.http.get<Array<RestaurantRecord>>(
      "http://localhost:3000/restaurants",
      {
        params: {
          name
        }
      }
    );
  }

  getRestaurants() {
    const params = {
      _page: "51",
      _limit: "20"
    };

    return this.http.get<Array<RestaurantRecord>>(
      "http://localhost:3000/restaurants",
      {
        params
      }
    );
  }

  addRestaurant(restaurant: RestaurantRecord) {
    return this.http.post<RestaurantRecord>(
      `http://localhost:3000/restaurants`,
      restaurant
    );
  }
}

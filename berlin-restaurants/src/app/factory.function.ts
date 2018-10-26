import { Restaurant2Service } from "./restaurant/restaurant2.service";
import { RestaurantService } from "./restaurant/restaurant.service";

export function restaurantFactory(env) {
  if (env === "DEVELOPMENT") return new Restaurant2Service();
  else return new RestaurantService();
}

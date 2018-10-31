import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListComponent } from "./list/list.component";
import { ItemComponent } from "./item/item.component";
import { SharedModule } from "../shared/shared.module";
import { SearchComponent } from "./search/search.component";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { DetailComponent } from "./detail/detail.component";
import { PrivateGuard } from "../private.guard";
import { AddComponent } from "./add/add.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FavoriteRestaurantComponent } from "./favorite-restaurant/favorite-restaurant.component";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([
      { path: "restaurants", component: ListComponent },
      {
        path: "restaurants/:name",
        component: DetailComponent,
        canActivate: [PrivateGuard]
      }
    ])
  ],
  declarations: [
    ListComponent,
    ItemComponent,
    SearchComponent,
    AddComponent,
    FavoriteRestaurantComponent
  ],
  exports: [ListComponent]
})
export class RestaurantModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListComponent } from "./list/list.component";
import { ItemComponent } from "./item/item.component";
import { SharedModule } from "../shared/shared.module";
import { SearchComponent } from "./search/search.component";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { DetailComponent } from "./detail/detail.component";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: "restaurants", component: ListComponent },
      { path: "restaurants/:name", component: DetailComponent }
    ])
  ],
  declarations: [ListComponent, ItemComponent, SearchComponent],
  exports: [ListComponent]
})
export class RestaurantModule {}

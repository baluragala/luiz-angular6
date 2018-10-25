import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListComponent } from "./list/list.component";
import { ItemComponent } from "./item/item.component";
import { SharedModule } from "../shared/shared.module";
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [ListComponent, ItemComponent, SearchComponent],
  exports: [ListComponent]
})
export class RestaurantModule {}

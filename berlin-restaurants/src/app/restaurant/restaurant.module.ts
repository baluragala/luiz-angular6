import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListComponent } from "./list/list.component";
import { ItemComponent } from "./item/item.component";

@NgModule({
  imports: [CommonModule],
  declarations: [ListComponent, ItemComponent],
  exports: [ListComponent]
})
export class RestaurantModule {}

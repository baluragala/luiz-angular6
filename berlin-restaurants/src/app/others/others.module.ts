import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SpotsComponent } from "./spots/spots.component";
import { HangoutsComponent } from "./hangouts/hangouts.component";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "spots", component: SpotsComponent },
      {
        path: "hangouts",
        component: HangoutsComponent
      }
    ])
  ],
  declarations: [SpotsComponent, HangoutsComponent]
})
export class OthersModule {}

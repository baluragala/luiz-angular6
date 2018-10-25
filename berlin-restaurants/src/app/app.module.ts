import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { RestaurantModule } from "./restaurant/restaurant.module";
import { SwitchComponent } from "./switch/switch.component";
import { AsyncpipeComponent } from './asyncpipe/asyncpipe.component';

@NgModule({
  declarations: [AppComponent, SwitchComponent, AsyncpipeComponent],
  imports: [BrowserModule, SharedModule, RestaurantModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

//feature

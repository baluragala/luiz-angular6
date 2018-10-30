import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { RestaurantModule } from "./restaurant/restaurant.module";
import { SwitchComponent } from "./switch/switch.component";
import { AsyncpipeComponent } from "./asyncpipe/asyncpipe.component";
import { RouterModule } from "@angular/router";
import { ListComponent } from "./restaurant/list/list.component";
import { HomeComponent } from "./home/home.component";
import { OthersModule } from "./others/others.module";
import { ItemComponent } from "./restaurant/item/item.component";
import { DetailComponent } from "./restaurant/detail/detail.component";
import { NotFoundComponent } from "./not-found/not-found.component";

@NgModule({
  declarations: [
    AppComponent,
    SwitchComponent,
    AsyncpipeComponent,
    HomeComponent,
    DetailComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RestaurantModule,
    OthersModule,
    RouterModule.forRoot([
      {
        path: "home",
        component: HomeComponent
      },
      {
        path: "**",
        component: NotFoundComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

//feature

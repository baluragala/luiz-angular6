import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer.component";
import { DomainPipe } from "./domain.pipe";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule.forChild([])],
  declarations: [HeaderComponent, FooterComponent, DomainPipe],
  exports: [HeaderComponent, FooterComponent, DomainPipe]
})
export class SharedModule {}

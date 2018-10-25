import { Component, OnInit } from "@angular/core";

@Component({
  selector: "blr-switch",
  template: `
    <h4>
      ngSwitch
    </h4>
    
    <div [ngSwitch]="day">
      <p class="inline">Today is </p>
      <p *ngSwitchCase="0" class="inline special">Sunday</p>
      <p *ngSwitchCase="1" class="inline special">Monday</p>
      <p *ngSwitchCase="2" class="inline special">Tuesday</p>
      <p *ngSwitchCase="3" class="inline special">Wednesday</p>
      <p *ngSwitchCase="4" class="inline special">Thursday</p>
      <p *ngSwitchCase="5" class="inline special">Friday</p>
      <p *ngSwitchCase="6" class="inline special">Saturday</p>
      <p *ngSwitchDefault class="inline special">Invalid Day !!</p>
    </div>
    
  `,
  styles: [
    `
      .inline {
        display: inline;
      }
    `,
    `
      .special {
        font-weight: bold;
      }
    `
  ]
})
export class SwitchComponent implements OnInit {
  day: number;
  date: Date;

  constructor() {}

  ngOnInit() {
    this.date = new Date();
    this.day = this.date.getDay();
  }
}

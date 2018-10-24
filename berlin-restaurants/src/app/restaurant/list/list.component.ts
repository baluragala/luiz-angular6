import { Component, OnInit } from "@angular/core";

@Component({
  selector: "blr-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  type: string = "Top 10";
  constructor() {}

  ngOnInit() {}

  getType() {
    return this.type;
  }
}

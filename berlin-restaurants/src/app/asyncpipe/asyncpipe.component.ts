import { Component, OnInit } from "@angular/core";

@Component({
  selector: "blr-asyncpipe",
  templateUrl: "./asyncpipe.component.html",
  styleUrls: ["./asyncpipe.component.css"]
})
export class AsyncpipeComponent implements OnInit {
  delayProducts;
  constructor() {}

  ngOnInit() {
    this.delayProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ message: "done" });
      }, 2000);
    });
  }
}

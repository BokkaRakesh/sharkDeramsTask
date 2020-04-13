import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-char-display-list",
  templateUrl: "./char-display-list.component.html",
  styleUrls: ["./char-display-list.component.scss"],
})
export class CharDisplayListComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.testFunction();
  }
  testFunction() {
    console.log("CharDisplayListComponent -> testFunction -> testFunction");
  }
}

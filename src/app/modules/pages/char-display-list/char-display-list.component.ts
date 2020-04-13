import { Component, OnInit, ViewChild } from "@angular/core";
import { DataServiceService } from "src/app/core/data-service.service";
import { MatPaginator, MatTableDataSource, MatSort } from "@angular/material";
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";

@Component({
  selector: "app-char-display-list",
  templateUrl: "./char-display-list.component.html",
  styleUrls: ["./char-display-list.component.scss"],
  animations: [
    trigger("detailExpand", [
      state(
        "void",
        style({ height: "0px", minHeight: "0", visibility: "hidden" })
      ),
      state("*", style({ height: "*", visibility: "visible" })),
      transition("void <=> *", animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")),
    ]),
  ],
})
export class CharDisplayListComponent implements OnInit {
  displayedColumns: string[] = ["name", "planet", "height", "gender"];
  dataSource: any = [];
  apiData: any;
  dummyData: any = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  isExpansionDetailRow = (index, row) => row.hasOwnProperty("detailRow");

  constructor(private data: DataServiceService) {}

  ngOnInit() {
    this.testFunction();
  }

  testFunction() {
    this.data.customApiCall();

    console.log("CharDisplayListComponent -> testFunction -> testFunction");
    this.apiData = this.data.globalArray;
    console.log(
      "CharDisplayListComponent -> testFunction -> this.apiData ",
      this.apiData
    );
    this.dummyData.push(this.apiData);
    console.log(
      "CharDisplayListComponent -> testFunction -> this.dummyData.",
      this.dummyData[0]
    );
    this.dummyData.map((res) => {
      console.log("CharDisplayListComponent -> testFunction -> res", res);
    });
    this.dataSource = new MatTableDataSource(this.apiData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(
      "CharDisplayListComponent -> testFunction -> this.dataSource",
      this.dataSource
    );
  }
  applyFilter(filterValue: string) {
    console.log(
      "CharDisplayListComponent -> applyFilter -> filterValue",
      filterValue
    );
    filterValue = filterValue.trim(); // Remove whitespace
    console.log(
      "CharDisplayListComponent -> applyFilter -> filterValue",
      filterValue.trim()
    );
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = JSON.stringify(filterValue);
    console.log(
      "CharDisplayListComponent -> applyFilter -> filterValue-filter",
      filterValue
    );
  }
}
export interface PeriodicElement {
  name: string;
  planet: number;
  height: number;
  gender: string;
}
// const ELEMENT_DATA: PeriodicElement[] = this.

import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class DataServiceService {
  globalArray: any = [];
  constructor(private httpService: HttpClient) {}

  customApiCall() {
    this.httpService
      .get("../../../../../assets/json/sampleData.json")
      .subscribe(
        (data: any) => {
          console.log("DataServiceService -> customApiCall -> data", data);
          this.globalArray.push(data);
        },
        (err: HttpErrorResponse) => {
          console.log(err.message);
        }
      );
    console.log(
      "DataServiceService -> customApiCall -> this.globalArray",
      this.globalArray
    );
  }
}

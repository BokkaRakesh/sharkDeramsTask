import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CharDisplayListComponent } from "./modules/pages/char-display-list/char-display-list.component";
import { HttpClientModule } from "@angular/common/http";
import { CustomMaterialModule } from "./shared/custom-material/custom-material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CdkDetailRowDirective } from './modules/cdk-detail-row.directive';

@NgModule({
  declarations: [AppComponent, CharDisplayListComponent, CdkDetailRowDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CustomMaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

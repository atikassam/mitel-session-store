import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ItemComponent} from "./components/item/component";
import {ItemListComponent} from "./components/item-list/component";
import {ItemDetailsComponent} from "./components/item-details/component";
import {DataProvider} from "./services/data.provider";
import {ChildTestCDSComponent} from "./components/item-details/CDS/component";

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ItemListComponent,
    ItemDetailsComponent,
    ChildTestCDSComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ DataProvider ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ItemComponent} from "./components/item/component";
import {ItemListComponent} from "./components/item-list/component";
import {ItemDetailsComponent} from "./components/item-details/component";
import {DataProvider} from "./services/data.provider";
import {ChildTestCDSComponent} from "./components/item-details/CDS/component";
import { ChartsModule } from 'ng2-charts';
import {ChartsComponent} from "./components/chart-component/component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ItemListComponent,
    ItemDetailsComponent,
    ChildTestCDSComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [ DataProvider ],
  bootstrap: [AppComponent]
})
export class AppModule { }

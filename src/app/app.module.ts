import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ItemComponent} from "./components/item/component";
import {ItemListComponent} from "./components/item-list/component";
import {ItemDetailsComponent} from "./components/item-details/component";
import {DataProvider} from "./services/data.provider";
import {ChildTestCDSComponent} from "./components/item-details/CDS/component";
import {PieChartComponent} from "./components/chart/component";
import {ChartsModule} from "ng2-charts";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {LifecycleComponent} from "./components/lifecycle/component";
import {ContainerComponent} from "./components/container/component";
import {HomeComponent} from "./pages/home/component";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {AddItemComponent} from "./components/add-item/component";


@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ItemListComponent,
    ItemDetailsComponent,
    ChildTestCDSComponent,
    PieChartComponent,
    LifecycleComponent,
    ContainerComponent,
    HomeComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [ DataProvider ],
  bootstrap: [AppComponent]
})
export class AppModule { }

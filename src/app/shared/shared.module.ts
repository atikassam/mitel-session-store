import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ItemComponent} from "../components/item/component";
import {CommonModule} from "@angular/common";
import {MatCardModule} from "@angular/material";

@NgModule({
  declarations: [ ItemComponent ],
  imports: [
    CommonModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [],
  exports: [ ItemComponent ]
})
export class SharedModule { }

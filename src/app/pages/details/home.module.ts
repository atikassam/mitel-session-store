import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DetailsComponent} from "./component";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";

const routes: Routes = [
  {
    path: ':id',
    component: DetailsComponent
  }
];

@NgModule({
  declarations: [ DetailsComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class HomeModule {}

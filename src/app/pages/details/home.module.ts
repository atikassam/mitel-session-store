import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DetailsComponent} from "./component";

const routes: Routes = [
  {
    path: ':id',
    component: DetailsComponent
  }
];

@NgModule({
  declarations: [ DetailsComponent ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeModule {}

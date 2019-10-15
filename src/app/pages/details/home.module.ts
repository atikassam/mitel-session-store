import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DetailsComponent} from "./component";

const routes: Routes = [
  {
    path: '',
    component: DetailsComponent
  },
  {
    path: 'prod1',
    component: DetailsComponent
  },
  {
    path: 'prod12',
    component: DetailsComponent
  },
  {
    path: '**',
    component: DetailsComponent
  }
];

@NgModule({
  declarations: [ DetailsComponent ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeModule {}

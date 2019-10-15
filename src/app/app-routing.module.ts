import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ItemListComponent} from "./components/item-list/component";
import {HomeComponent} from "./pages/home/component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list', component: ItemListComponent },

  { path: 'details', loadChildren: () => import('./pages/details/home.module').then(e => e.HomeModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

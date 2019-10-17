import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ItemListComponent} from "./components/item-list/component";
import {HomeComponent} from "./pages/home/component";
import {AddItemComponent} from "./components/add-item/component";
import {AuthGuard} from "./services/auth.guard";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add-item', canActivate: [ AuthGuard ], component: AddItemComponent },

  // details/
  { path: 'details', loadChildren: () => import('./pages/details/home.module').then(e => e.HomeModule) },
  { path: 'list', loadChildren: () => import('./pages/store/store.module').then(e => e.StoreModule) },
  { path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(e => e.AuthModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

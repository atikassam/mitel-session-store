import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { LoginComponent} from "./login/component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule, MatCardModule, MatDividerModule} from "@angular/material";
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [ LoginComponent ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule
  ],
  exports: [RouterModule],
})
export class AuthModule {}

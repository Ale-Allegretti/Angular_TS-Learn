import { CreateUserComponent } from './create-user/create-user.component';
import { SingleComponent } from './single/single.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "single/:id", component: SingleComponent},
  { path: "newUser", component: CreateUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

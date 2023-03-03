import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { LoginComponent } from './Layouts/login/login.component';
import { SignupComponent } from './Layouts/signup/signup.component';

const routes: Routes = [
{
  path: '',
  component: HomeComponent
},
{
  path: 'signup',
  component: SignupComponent
},
{
  path: 'login',
  component: LoginComponent
}];
=======

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];
>>>>>>> f72bf332f3faf456b10842d8958b28aff5d53411

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

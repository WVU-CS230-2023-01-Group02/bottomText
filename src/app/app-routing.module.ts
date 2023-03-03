import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

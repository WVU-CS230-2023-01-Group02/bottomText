import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
<<<<<<< Updated upstream

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];
=======
import { LoginComponent } from './Layouts/login/login.component';
import { SignupComponent } from './Layouts/signup/signup.component';
import { ResultsComponent } from './Layouts/results/results.component';

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
},
{
  path: 'results',
  component: ResultsComponent
}];
>>>>>>> Stashed changes

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Layouts/home/home.component';

import { NavbarComponent } from './Layouts/home/navbar/navbar.component';
import { BackgroundComponent } from './Layouts/home/background/background.component';
import { FooterComponent } from './Layouts/footer/footer.component';

import { SignupComponent } from './Layouts/signup/signup.component';
import { LoginComponent } from './Layouts/login/login.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    BackgroundComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

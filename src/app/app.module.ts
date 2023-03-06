import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { BackgroundComponent } from './home/background/background.component';
import { FooterComponent } from './home/footer/footer.component';
<<<<<<< Updated upstream
=======
import { SignupComponent } from './Layouts/signup/signup.component';
import { LoginComponent } from './Layouts/login/login.component';
import { ResultsComponent } from './Layouts/results/results.component';
import { ListingCardComponent } from './layouts/results/listing-card/listing-card.component';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    BackgroundComponent,
<<<<<<< Updated upstream
    FooterComponent
=======
    FooterComponent,
    SignupComponent,
    LoginComponent,
    ResultsComponent,
    ListingCardComponent
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

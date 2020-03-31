import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './Components/top-nav/top-nav.component';
import { CountryComponent } from './Components/country/country.component';
import { HomeComponent } from './Components/home/home.component';
import { SafetyComponent } from './Components/safety/safety.component';
import { VideosComponent } from './Components/videos/videos.component';
import { ContactComponent } from './Components/contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
const appRoutes: Routes = [
  { path: '/home', component: HomeComponent },
  { path: '/country', component: CountryComponent },
  { path: '/safety', component: SafetyComponent},
  { path: '/videos', component: VideosComponent},
  { path: '/contact', component: ContactComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    CountryComponent,
    HomeComponent,
    SafetyComponent,
    VideosComponent,
    ContactComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

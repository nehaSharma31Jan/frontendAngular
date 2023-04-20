import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { WelcomeNavbarComponent } from './components/navbar/welcome-navbar/welcome-navbar.component';
import { HomeComponent } from './components/home/home.component';
import { MovieListComponent } from './components/movie/movie-list/movie-list.component';
import { MovieDetailsComponent } from './components/movie/movie-details/movie-details.component';
import { CreateMovieComponent } from './components/movie/create-movie/create-movie.component';
import { UpdateMovieComponent } from './components/movie/update-movie/update-movie.component';
import { DeleteMovieComponent } from './components/movie/delete-movie/delete-movie.component';
import { BookTicketComponent } from './components/movie/ticket/book-ticket.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { AuthInterceptor } from '../auth.interceptor';
import { AuthGuard } from '../auth.guard';
import { range, filter, map } from 'rxjs';

 import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    WelcomeNavbarComponent,
    HomeComponent,
    MovieListComponent,
    MovieDetailsComponent,
    CreateMovieComponent,
    UpdateMovieComponent,
    DeleteMovieComponent,
    BookTicketComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSliderModule,
    NgbModule
    
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    AuthGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

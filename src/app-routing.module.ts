import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './app/components/home/home.component';
import { LoginComponent } from './app/components/auth/login/login.component';
import { SignupComponent } from './app/components/auth/signup/signup.component';
import { MovieListComponent } from './app/components/movie/movie-list/movie-list.component';
import { MovieDetailsComponent } from './app/components/movie/movie-details/movie-details.component';
import { CreateMovieComponent } from './app/components/movie/create-movie/create-movie.component';
import { UpdateMovieComponent } from './app/components/movie/update-movie/update-movie.component';
import { DeleteMovieComponent } from './app/components/movie/delete-movie/delete-movie.component';
import { BookTicketComponent } from './app/components/movie/ticket/book-ticket.component';
import { AuthGuard } from './auth.guard';
import { WelcomeNavbarComponent } from './app/components/navbar/welcome-navbar/welcome-navbar.component';
import { NavbarComponent } from './app/components/navbar/navbar.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'movies', component: MovieListComponent },
  { path: 'welcome', component: WelcomeNavbarComponent },
  { path: 'movie/:id', component: MovieDetailsComponent },
  { path: 'create', component: CreateMovieComponent, canActivate: [AuthGuard] },
  { path: 'update/:id', component: UpdateMovieComponent, canActivate: [AuthGuard] },
  { path: 'delete/:id', component: DeleteMovieComponent, canActivate: [AuthGuard] },
  { path: 'book/:id', component: BookTicketComponent, canActivate: [AuthGuard] },
  {path: 'home', component: NavbarComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

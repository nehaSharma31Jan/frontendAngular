import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../models/movie.model';
import { MovieService } from '../../../services/movie.service';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../models/user.model';
import { Options } from '@angular-slider/ngx-slider/options';

@Component({
selector: 'app-movie-list',
templateUrl: './movie-list.component.html',
styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
movies: Movie[] = [];
user: User | null = null;

// slider code
value: number = 5;
  options: Options = {
    showTicksValues: true,
    stepsArray: [
      { value: 1, legend: "Very poor" },
      { value: 2 },
      { value: 3, legend: "Fair" },
      { value: 4 },
      { value: 5, legend: "Average" },
      { value: 6 },
      { value: 7, legend: "Good" },
      { value: 8 },
      { value: 9, legend: "Excellent" }
    ]
  };




constructor(private movieService: MovieService, private authService: AuthService) { }

ngOnInit(): void {
this.movieService.getMovieList().subscribe((movies) => {
this.movies = movies;
});
this.authService.getCurrentUser().subscribe((user: User | null) => {
this.user = user;
});
}

}
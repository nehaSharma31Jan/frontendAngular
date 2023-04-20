import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getMovieList(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.baseUrl}/movies`);
  }

  getMovieDetails(movieId: string): Observable<Movie> {
    return this.http.get<Movie>(`${this.baseUrl}/movies/${movieId}`);
  }

  createMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(`${this.baseUrl}/movies`, movie);
  }

  updateMovie(movieId: string, movie: Movie): Observable<Movie> {
    return this.http.put<Movie>(`${this.baseUrl}/movies/${movieId}`, movie);
  }

  deleteMovie(_id: any): Observable<Movie> {
    return this.http.delete<Movie>(`${this.baseUrl}/movies/${_id}`);
  }

  bookTicket(movieId: string, ticketData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/book/${movieId}`, ticketData);
  }
}

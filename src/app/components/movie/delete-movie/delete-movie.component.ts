import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-delete-movie',
  templateUrl: './delete-movie.component.html',
 // styleUrls: ['./delete-movie.component.css']
})
export class DeleteMovieComponent implements OnInit {
  selectedMovie: Movie | undefined;
  // constructor injection to access the service

  constructor(private movieService: MovieService, private router: Router, private route: ActivatedRoute) { }
  reactiveForm!: FormGroup;
  ngOnInit() {

// creating reactive form to delete
    // creating form group
    this.reactiveForm = new FormGroup({
      // now creating form controls
      movieid: new FormControl('defaultname')



//     const id = this.route.snapshot.paramMap.get('id');
// if (id) {
//   this.movieService.getMovieDetails(id).subscribe(
//     data => this.selectedMovie = data,
//     error => console.error(error)
//   );
// }

  });

  // onSubmit() {
  //   const id = this.selectedMovie?._id;
  //   if (id) {
  //     this.movieService.deleteMovie(id).subscribe(
  //       data => this.router.navigate(['/movies']),
  //       error => console.error(error)
  //     );
  //   }
  // }
  

  // goBack() {
  //   this.router.navigate(['/movies']);
  // }
}

onsubmit() {
    let idis:any = (this.reactiveForm.controls['movieid'].value);
    console.log(idis);

    // calling the service method to delete the service
      if (idis) {
      this.movieService.deleteMovie(idis).subscribe(
        data => this.router.navigate(['/movies']),
        error => console.error(error)
      );
    }

  }
  



}

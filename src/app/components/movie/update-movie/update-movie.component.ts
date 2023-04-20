import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie, Seat } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
 // styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent implements OnInit {

  name: string = '';
  description: string = '';
  poster: string = '';
  showtimes: string = '';
  seats: Seat[] =[];

  // creating the reactive form
  reactiveForm!: FormGroup;

  ngOnInit(): void {
    // creating form group
  this.reactiveForm = new FormGroup({
    // now creating form controls
    _id: new FormControl(),
    name: new FormControl('defaultname'),
    description: new FormControl(),
    poster: new FormControl(),
    date: new FormControl(),
    time: new FormControl(),
    seatsavailable: new FormControl(),
    row: new FormControl(),
    number: new FormControl(),
    available: new FormControl()

  });
  }

  constructor(private route: ActivatedRoute, private router: Router, private movieService: MovieService, private formBuilder: FormBuilder) { }

  // ngOnInit(): void {
  //   this.route.params.subscribe(params => {
  //     this.movieId = params['id'];
  //     this.movieService.getMovieDetails(this.movieId).subscribe(
  //       movie => {
  //         this.movie = movie;
  //         this.updateMovieForm = this.formBuilder.group({
  //           name: [this.movie.name, Validators.required],
  //           description: [this.movie.description, Validators.required],
  //           poster: [this.movie.poster, Validators.required],
  //           showtimes: [this.movie.showtimes, Validators.required]
  //         });
  //         this.isLoaded = true;
  //       },
  //       error => {
  //         this.errorMessage = error.message;
  //         this.isLoaded = true;
  //       }
  //     );
  //   });
  // }

  onsubmit() {
    // getting the values from the form
    let id:any = this.reactiveForm.controls['_id'].value;
    let nameis:any = this.reactiveForm.controls['name'].value;
    let description:any = this.reactiveForm.controls['description'].value;
    let poster:any = this.reactiveForm.controls['poster'].value;
    let date:any = this.reactiveForm.controls['date'].value;
    let time:any = this.reactiveForm.controls['time'].value;
    let seatsavailable:any = this.reactiveForm.controls['seatsavailable'].value;
   //  let seats:any = this.reactiveForm.controls['seats'].value;
    let rowis:any = this.reactiveForm.controls['row'].value;
    let number:any = this.reactiveForm.controls['number'].value;
    let available:any = this.reactiveForm.controls['available'].value;
 
     this.seats.push({row:rowis,number:number,available:available});

     const newMovie: Movie = {
       
      _id: id,
     name: nameis,
     
     description: description,
     poster: poster,
     showtimes: this.showtimes.split(',').map((showtime) => {
       return {
         date: date,
         time: time.trim(),
         // seats: [row,number,available]
         seats: this.seats.map((seat)=> {
           return{
         row: seat.row,
         number: seat.number,
         available: seat.available

         }})
       
       };
     })
    
   };
 


    // if (this.updateMovieForm.invalid) {
    //   return;
    // }
    this.movieService.updateMovie(id=id, newMovie).subscribe(() => {
      this.router.navigateByUrl('/movies');
    });
  }
}

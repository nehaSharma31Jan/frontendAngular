import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../services/movie.service';
import { Router } from '@angular/router';
import { Movie, Seat } from '../../../models/movie.model';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
 // styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {
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
















  constructor(private movieService: MovieService, private router: Router) {}

  onsubmit() {
    console.log(this.reactiveForm);
   // get the movie inputs from  the form controls
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
       
       _id: '',
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

   

    this.movieService.createMovie(newMovie).subscribe(
      (data: any) => {
        console.log(data);
        this.router.navigate(['/movies']);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}

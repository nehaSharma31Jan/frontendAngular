import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../../services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
})
export class BookTicketComponent implements OnInit {
  date: string | undefined;
  time: string | undefined;
  seats!: number;
  movieId: string | undefined;

  constructor(private route: ActivatedRoute,private router: Router, private movieService: MovieService) { 
    this.seats = 0;
  }

  ngOnInit(): void {
    this.movieId = this.route.snapshot.paramMap.get('id') as string | undefined;
  }

  selectedSeats: Set<number> = new Set();
  // seatsArray: number[] = Array(40).fill(0).map((_, index) => index + 1);
  seatRows: number[][] = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36, 37, 38, 39, 40]
  ];
  toggleSeatSelection(seat: number): void {
    if (this.isSelectedSeat(seat)) {
      this.selectedSeats.delete(seat);
    } else if (!this.isUnavailableSeat(seat) && this.selectedSeats.size < this.seats) {
      this.selectedSeats.add(seat);
    }
  }
  

  isSelectedSeat(seatNumber: number) {
    return this.selectedSeats.has(seatNumber);
  }

  isUnavailableSeat(seat: number): boolean {
    return this.selectedSeats.has(seat);
  }
  

  book(): void {
    const ticketData = { date: this.date, time: this.time, seats: this.seats };

      const confirmation = window.prompt('Are you sure you want to book this ticket? Type phone number to recieve ticket Barcode.');
      const confirmationId = Math.floor(Math.random() * 1000000) + 1;
      const message = `Ticket booked successfully! Confirmation ID: ${confirmationId}\n\nDate: ${this.date}\nTime: ${this.time}\nSeats: ${this.seats} \nBooking information will be revieved on: ${confirmation}`;
      alert(message);
      this.router.navigate(['/movies']);
 
}

}

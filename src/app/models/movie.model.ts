export interface Movie {
    _id: any;
    name: any;
    description: any;
    poster: any;
    showtimes: Showtime[];
  }
  
  export interface Showtime {
    date: any;
    time: any;
    seats: Seat[];
  }
  
  export interface Seat {
    // rowis: any;
    row: any;
    number: any;
    available: any;
  }
  
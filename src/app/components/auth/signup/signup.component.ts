import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
 // styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  email: string = '';
  name: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    const user: User = {
      email: this.email, name: this.name, password: this.password,
      id: ''
    };
    this.authService.signup(user)
      .subscribe(
        (data) => {
          console.log('Signup successful');
          this.router.navigate(['/login']);
        },
        (error) => {
          console.error(error);
        }
      );
  }

}

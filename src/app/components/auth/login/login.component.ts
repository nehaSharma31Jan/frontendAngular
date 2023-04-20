import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

email: string = '';
password: string = '';
errorMessage: string = '';

constructor(private authService: AuthService, private router: Router) { }

ngOnInit(): void {
}

onSubmit(loginForm: NgForm) {
if (loginForm.valid) {
this.authService.login(this.email, this.password).subscribe(
() => {
console.log('Login successful');
// Navigate to home page or redirect to previous URL
this.router.navigate(['/home']);
},
(error) => {
console.error(error);
this.errorMessage = 'Invalid email or password';
}
);
}
}

}
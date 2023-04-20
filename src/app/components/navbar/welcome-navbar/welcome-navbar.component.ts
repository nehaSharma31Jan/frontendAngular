import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-welcome-navbar',
  templateUrl: './welcome-navbar.component.html',
  styleUrls: ['./welcome-navbar.component.css']
})
export class WelcomeNavbarComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {}

  logout() {
    this.authService.logout();
  }
}

import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: string = "";

  constructor(
    public userService: UserService,
    private router: Router
  ) {
    sessionStorage.removeItem('user');
  }

  ngOnInit(): void {
  }

  login(): void {
    this.userService.login(this.email, this.password).subscribe(user => {
      sessionStorage.setItem('user', JSON.stringify(user));
      this.router.navigate(['products']);
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  username: string;
  alias: string;
  ngOnInit() {
  }
  login(): void {
    console.log(this.username);
    this.router.navigate(['chats'], { state: {username: this.username}});
  }
}



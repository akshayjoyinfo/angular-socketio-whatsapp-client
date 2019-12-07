import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  username = '';

  constructor(private router: Router) {
    this.username = this.router.getCurrentNavigation().extras.state.username || "Anonymous";


   }

  ngOnInit() {
  }

}

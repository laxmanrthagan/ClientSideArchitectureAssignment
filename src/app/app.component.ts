import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    
  }

  checkCurrentRoute() {
    return !(this.router.url.indexOf('game-dashboard') !== -1 || this.router.url.indexOf('home') !== -1);
  }

  checkHomeRoute() {
    return this.router.url.indexOf('home') !== -1;
  }
}

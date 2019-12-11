import { Component, OnInit, ViewChild, Input, Output, OnChanges, AfterViewInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  username: string;
  constructor(private auth: AuthService) {}

  ngOnInit() {}

  isAuth(): boolean {
    return this.auth.isAuthenticated();
  }
  logOut() {
    this.auth.logout();
  }
}

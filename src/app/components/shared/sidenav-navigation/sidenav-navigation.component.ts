import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-sidenav-navigation',
  templateUrl: './sidenav-navigation.component.html',
  styleUrls: ['./sidenav-navigation.component.css']
})
export class SidenavNavigationComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  logout() {
   this.authService.logout();
  }

}

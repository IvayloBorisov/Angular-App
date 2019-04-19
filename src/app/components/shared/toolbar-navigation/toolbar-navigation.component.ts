import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../authentication/auth.service';

@Component({
  selector: 'app-toolbar-navigation',
  templateUrl: './toolbar-navigation.component.html',
  styleUrls: ['./toolbar-navigation.component.css']
})
export class ToolbarNavigationComponent implements OnInit {

  @Output() toggleSideNavigation = new EventEmitter<void>();

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  toggleSideNav() {
    this.toggleSideNavigation.emit();
  }

  logout() {
    this.authService.logout();
  }

}

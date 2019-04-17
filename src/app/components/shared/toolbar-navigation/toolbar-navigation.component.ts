import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar-navigation',
  templateUrl: './toolbar-navigation.component.html',
  styleUrls: ['./toolbar-navigation.component.css']
})
export class ToolbarNavigationComponent implements OnInit {

  @Output() toggleSideNavigation = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  toggleSideNav() {
    this.toggleSideNavigation.emit();
  }

}

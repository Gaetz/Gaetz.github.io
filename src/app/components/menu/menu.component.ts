import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gb-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {

  navbarCollapsed: boolean;

  constructor() {
    this.navbarCollapsed = true;
  }

  ngOnInit() {
  }

  toggleNavbar(): void {
    this.navbarCollapsed = !this.navbarCollapsed;
  }

}
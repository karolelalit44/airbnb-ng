import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { compass, heart, person } from 'ngx-bootstrap-icons';

@Component({
  selector: 'app-bottom-nav-bar',
  standalone: false,

  templateUrl: './bottom-nav-bar.component.html',
  styleUrl: './bottom-nav-bar.component.css'
})

export class BottomNavBarComponent {
  navItems = [
    { label: 'Explore', route: '/', icon: 'explore', isActive: true },
    { label: 'Wishlists', route: '/wishlists', icon: 'heart', isActive: false },
    { label: 'Log in', route: '/login', icon: 'login', isActive: false }
  ];

  constructor(private router: Router) { }


  isActive(route: string): boolean {
    return this.router.url === route;
  }


  setActive(route: string) {
    this.navItems.forEach(item => item.isActive = (item.route === route));
  }

}
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports:[CommonModule],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isUserCardOn = false;

  toggleCard() {
    this.isUserCardOn = !this.isUserCardOn;
  }

}
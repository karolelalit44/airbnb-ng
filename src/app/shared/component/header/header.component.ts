import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { SetRegionComponent } from '../../modals/set-region/set-region.component';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, SetRegionComponent, RouterLink, RouterModule],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  isUserCardOn = false;
  activeItem: string = 'stays';
  isSetRegionModalOpen = false; 


  toggleCard(event: MouseEvent) {
    this.isUserCardOn = !this.isUserCardOn;
    event.stopPropagation();
  }


  setActive(item: string): void {
    this.activeItem = item;
  }


  openSetRegionModal() {
    this.isSetRegionModalOpen = true;
  }

  closeSetRegionModal() {
    this.isSetRegionModalOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const userCardElement = document.querySelector('.usericon');
    const userCardContent = document.querySelector('.user-card'); 
    if (userCardElement && !userCardElement.contains(event.target as Node) && this.isUserCardOn) {
      this.isUserCardOn = false;
    }
  }
  

}
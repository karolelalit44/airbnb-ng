import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SetRegionComponent } from '../../modals/set-region/set-region.component';

@Component({
  selector: 'app-header',
  imports:[CommonModule, SetRegionComponent],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  isUserCardOn = false;
  activeItem: string = 'stays';

  toggleCard() {
    this.isUserCardOn = !this.isUserCardOn;
  }


  setActive(item: string): void {
    this.activeItem = item;
  }

  isSetRegionModalOpen = false;

  openSetRegionModal() {
    this.isSetRegionModalOpen = true;
  }

  closeSetRegionModal() {
    this.isSetRegionModalOpen = false;
  }
  

}
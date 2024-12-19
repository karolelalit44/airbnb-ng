import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-set-region',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './set-region.component.html',
  styleUrl: './set-region.component.css'
})

export class SetRegionComponent {
  @Output() close = new EventEmitter<void>();
  isModalOpen= false
  activeSection: 'languageRegion' | 'currency' = 'languageRegion';

  closeModal() {
    this.isModalOpen = false;
    this.close.emit();
  }

  openModal() {
    this.isModalOpen = true;
  }


  setActiveSection(section: 'languageRegion' | 'currency') {
    this.activeSection = section;
  }
}
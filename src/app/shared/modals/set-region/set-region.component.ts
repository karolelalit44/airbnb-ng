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

  activeSection: 'languageRegion' | 'currency' = 'languageRegion';

  closeModal() {
    this.close.emit();
  }

  setActiveSection(section: 'languageRegion' | 'currency') {
    this.activeSection = section;
  }
}
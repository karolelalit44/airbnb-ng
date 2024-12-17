import { Component } from '@angular/core';

@Component({
  selector: 'app-host-home',
  standalone: true,
  imports: [],
  templateUrl: './host-home.component.html',
  styleUrl: './host-home.component.css'
})

export class HostHomeComponent {
  title: string = 'You could earn';
  nightlyRate: number = 943;
  totalEarnings: number = 6600;
}

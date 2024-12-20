import { Component } from '@angular/core';

interface Property {
  location: string;
  rating: number;
  distance: string;
  dates: string;
  price: string;
}

@Component({
  selector: 'app-property-list',
  standalone: false,
  // imports: [],
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent {
  properties: Property[] = [
    { location: 'Western Cape, South Africa', rating: 4.94, distance: '8,818 kilometres away', dates: '12-17 Jan', price: '$4,033 TWD night' },
    { location: 'Sindun-myeon, Icheon-si, South Korea', rating: 4.84, distance: '4,984 kilometres away', dates: '10-15 Jan', price: '$2,383 TWD night' },
    { location: 'Nelson, New Zealand', rating: 4.92, distance: '12,139 kilometres away', dates: '24-29 Jan', price: '$5,327 TWD night' },
    { location: 'Brålanda, Sweden', rating: 4.96, distance: '6,374 kilometres away', dates: '1-6 Jan', price: '$14,660 TWD night' },
    { location: 'Hua Hin District, Thailand', rating: 4.96, distance: '2,670 kilometres away', dates: '16-21 Jan', price: '$3,770 TWD night' },
    { location: 'Kecamatan Kuta Selatan, Indonesia', rating: 0, distance: '5,436 kilometres away', dates: '23-28 Dec', price: '$91,826 TWD night' },
    { location: 'Terrasini, Italy', rating: 4.9, distance: '', dates: '', price: '$5,908 TWD night' }, // Note: distance and dates are empty
    { location: 'Râşnov Romacril, Romania', rating: 4.93, distance: '5,257 kilometres away', dates: '5-10 Jan', price: '$4,012 TWD night' },
  ];
}

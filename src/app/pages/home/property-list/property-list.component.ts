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
    { location: 'Terrasini, Italy', rating: 4.9, distance: '', dates: '6,244 Kilometers away', price: '$5,908 TWD night' }, // Note: distance and dates are empty
    { location: 'Râşnov Romacril, Romania', rating: 4.93, distance: '5,257 kilometres away', dates: '5-10 Jan', price: '$4,012 TWD night' },


    { location: 'Mueang Chiang Mai District, Thailand', rating: 4.87, distance: '2,290 kilometres away', dates: '4-9 Jan', price: '$1,375 TWD night' },
    { location: 'Uurainen, Finland', rating: 5.0, distance: '5,811 kilometres away', dates: '8-13 Jan', price: '$9,501 TWD night' },
    { location: 'Ubud, Indonesia', rating: 4.92, distance: '5,429 kilometres away', dates: '20-25 Jan', price: '$27,989 TWD night' },
    { location: 'Siquijor, Philippines', rating: 4.98, distance: '5,141 kilometres away', dates: '28 Mar-2 Apr', price: '$2,443 TWD night' },
    { location: 'Chittorgarh State Pratap nagarNear, India', rating: 0, distance: '334 kilometres away', dates: '30 Dec-4 Jan', price: '$1,159 TWD night' },
    { location: 'Pirgos Kallistis, Greece', rating: 0, distance: '5,155 kilometres away', dates: '20-25 Dec', price: '$12,134 TWD night' },
    { location: 'Alliklepa, Estonia', rating: 4.87, distance: '5,761 kilometres away', dates: '6-11 Jan', price: '$5,908 TWD night' },
    { location: 'Sidemen, Indonesia', rating: 4.85, distance: '5,437 kilometres away', dates: '5-10 Feb', price: '$13,300 TWD night' },


// More Data
  ];


}

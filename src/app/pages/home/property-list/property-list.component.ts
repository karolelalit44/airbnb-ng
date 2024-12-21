import { Component, OnInit } from '@angular/core';
import { Property } from '../../../models/property';

@Component({
  selector: 'app-property-list',
  standalone: false,
  // imports: [],
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})


export class PropertyListComponent implements OnInit {
 
  properties: Property[] = [
    { location: 'Western Cape, South Africa', image: 'https://placehold.co/200x200?text=Placeholder', rating: 4.94, distance: '8,818 kilometres away', dates: '12-17 Jan', price: '$4,033 TWD night', isGuestFavourite: true },
    { location: 'Sindun-myeon, Icheon-si, South Korea', image: 'https://placehold.co/200x200?text=Placeholder', rating: 4.84, distance: '4,984 kilometres away', dates: '10-15 Jan', price: '$2,383 TWD night', isGuestFavourite: false },
    { location: 'Nelson, New Zealand', image: 'https://placehold.co/200x200?text=Placeholder', rating: 4.92, distance: '12,139 kilometres away', dates: '24-29 Jan', price: '$5,327 TWD night', isGuestFavourite: true },
    { location: 'Brålanda, Sweden', image: 'https://placehold.co/200x200?text=Placeholder', rating: 4.96, distance: '6,374 kilometres away', dates: '1-6 Jan', price: '$14,660 TWD night', isGuestFavourite: false },
    { location: 'Hua Hin District, Thailand', image: 'https://placehold.co/200x200?text=Placeholder', rating: 4.96, distance: '2,670 kilometres away', dates: '16-21 Jan', price: '$3,770 TWD night', isGuestFavourite: true },
    { location: 'Kecamatan Kuta Selatan, Indonesia', image: 'https://placehold.co/200x200?text=Placeholder', rating: 0, distance: '5,436 kilometres away', dates: '23-28 Dec', price: '$91,826 TWD night', isGuestFavourite: true },
    { location: 'Terrasini, Italy', image: 'https://placehold.co/200x200?text=Placeholder', rating: 4.9, distance: '', dates: '6,244 Kilometers away', price: '$5,908 TWD night', isGuestFavourite: false },
    { location: 'Râşnov Romacril, Romania', image: 'https://placehold.co/200x200?text=Placeholder', rating: 4.93, distance: '5,257 kilometres away', dates: '5-10 Jan', price: '$4,012 TWD night', isGuestFavourite: true },
    { location: 'Mueang Chiang Mai District, Thailand', image: 'https://placehold.co/200x200?text=Placeholder', rating: 4.87, distance: '2,290 kilometres away', dates: '4-9 Jan', price: '$1,375 TWD night', isGuestFavourite: false },
    { location: 'Uurainen, Finland', image: 'https://placehold.co/200x200?text=Placeholder', rating: 5.0, distance: '5,811 kilometres away', dates: '8-13 Jan', price: '$9,501 TWD night', isGuestFavourite: false },
    { location: 'Ubud, Indonesia', image: 'https://placehold.co/200x200?text=Placeholder', rating: 4.92, distance: '5,429 kilometres away', dates: '20-25 Jan', price: '$27,989 TWD night', isGuestFavourite: true },
    { location: 'Siquijor, Philippines', image: 'https://placehold.co/200x200?text=Placeholder', rating: 4.98, distance: '5,141 kilometres away', dates: '28 Mar-2 Apr', price: '$2,443 TWD night', isGuestFavourite: false },
    { location: 'Chittorgarh State Pratap nagarNear, India', image: 'https://placehold.co/200x200?text=Placeholder', rating: 0, distance: '334 kilometres away', dates: '30 Dec-4 Jan', price: '$1,159 TWD night', isGuestFavourite: true },
    { location: 'Pirgos Kallistis, Greece', image: 'https://placehold.co/200x200?text=Placeholder', rating: 0, distance: '5,155 kilometres away', dates: '20-25 Dec', price: '$12,134 TWD night', isGuestFavourite: false },
    { location: 'Alliklepa, Estonia', image: 'https://placehold.co/200x200?text=Placeholder', rating: 4.87, distance: '5,761 kilometres away', dates: '6-11 Jan', price: '$5,908 TWD night', isGuestFavourite: false },
    { location: 'Sidemen, Indonesia', image: 'https://placehold.co/200x200?text=Placeholder', rating: 4.85, distance: '5,437 kilometres away', dates: '5-10 Feb', price: '$13,300 TWD night', isGuestFavourite: false },
    { location: 'Western Cape, South Africa', image: 'https://placehold.co/200x200?text=Placeholder', rating: 4.94, distance: '8,818 kilometres away', dates: '12-17 Jan', price: '$4,033 TWD night', isGuestFavourite: false },
    { location: 'Sindun-myeon, Icheon-si, South Korea', image: 'https://placehold.co/200x200?text=Placeholder', rating: 4.84, distance: '4,984 kilometres away', dates: '10-15 Jan', price: '$2,383 TWD night', isGuestFavourite: true },
    { location: 'Nelson, New Zealand', image: 'https://placehold.co/200x200?text=Placeholder', rating: 4.92, distance: '12,139 kilometres away', dates: '24-29 Jan', price: '$5,327 TWD night', isGuestFavourite: false },
    { location: 'Brålanda, Sweden', image: 'https://placehold.co/200x200?text=Placeholder', rating: 4.96, distance: '6,374 kilometres away', dates: '1-6 Jan', price: '$14,660 TWD night', isGuestFavourite: true },
    { location: 'Hua Hin District, Thailand', image: 'https://placehold.co/200x200?text=Placeholder', rating: 4.96, distance: '2,670 kilometres away', dates: '16-21 Jan', price: '$3,770 TWD night', isGuestFavourite: true },
    { location: 'Kecamatan Kuta Selatan, Indonesia', image: 'https://placehold.co/200x200?text=Placeholder', rating: 0, distance: '5,436 kilometres away', dates: '23-28 Dec', price: '$91,826 TWD night', isGuestFavourite: true },
    { location: 'Terrasini, Italy', image: 'https://placehold.co/200x200?text=Placeholder', rating: 4.9, distance: '', dates: '6,244 Kilometers away', price: '$5,908 TWD night', isGuestFavourite: true },
    { location: 'Râşnov Romacril, Romania', image: 'https://placehold.co/200x200?text=Placeholder', rating: 4.93, distance: '5,257 kilometres away', dates: '5-10 Jan', price: '$4,012 TWD night', isGuestFavourite: true },
    { location: 'Mueang Chiang Mai District, Thailand', image: 'https://placehold.co/200x200?text=Placeholder', rating: 4.87, distance: '2,290 kilometres away', dates: '4-9 Jan', price: '$1,375 TWD night', isGuestFavourite: true },
    { location: 'Uurainen, Finland', image: 'https://placehold.co/200x200?text=Placeholder', rating: 5.0, distance: '5,811 kilometres away', dates: '8-13 Jan', price: '$9,501 TWD night', isGuestFavourite: true },
    { location: 'Ubud, Indonesia', image: 'https://placehold.co/200x200?text=Placeholder', rating: 4.92, distance: '5,429 kilometres away', dates: '20-25 Jan', price: '$27,989 TWD night', isGuestFavourite: true },
    { location: 'Siquijor, Philippines', image: 'https://placehold.co/200x200?text=Placeholder', rating: 4.98, distance: '5,141 kilometres away', dates: '28 Mar-2 Apr', price: '$2,443 TWD night', isGuestFavourite: true },
    { location: 'Chittorgarh State Pratap nagarNear, India', image: 'https://placehold.co/200x200?text=Placeholder', rating: 0, distance: '334 kilometres away', dates: '30 Dec-4 Jan', price: '$1,159 TWD night', isGuestFavourite: true },
    { location: 'Pirgos Kallistis, Greece', image: 'https://placehold.co/200x200?text=Placeholder', rating: 0, distance: '5,155 kilometres away', dates: '20-25 Dec', price: '$12,134 TWD night', isGuestFavourite: true },
    { location: 'Alliklepa, Estonia', image: 'https://placehold.co/200x200?text=Placeholder', rating: 4.87, distance: '5,761 kilometres away', dates: '6-11 Jan', price: '$5,908 TWD night', isGuestFavourite: false },
    { location: 'Sidemen, Indonesia', image: 'https://placehold.co/200x200?text=Placeholder', rating: 4.85, distance: '5,437 kilometres away', dates: '5-10 Feb', price: '$13,300 TWD night', isGuestFavourite: false },
  ];
  

  displayedProperties: Property[] = [];
  batchSize: number = 16;

  // Optional: Customize scroll trigger distances
  scrollDistance: number = 1;
  scrollUpDistance: number = 2;
  scrollDownDistance: number = 3;

  ngOnInit(): void {
    this.loadInitialProperties();
  }

  loadInitialProperties() {
    this.displayedProperties = this.properties.slice(0, this.batchSize);
  }

  loadMore() {
    console.log('Loading more properties...');
    const currentLength = this.displayedProperties.length;
    if (currentLength < this.properties.length) {
      const newProperties = this.properties.slice(currentLength, currentLength + this.batchSize);
      this.displayedProperties = [...this.displayedProperties, ...newProperties];
    }
  }

  toggleFavourite() {
    
  }

}
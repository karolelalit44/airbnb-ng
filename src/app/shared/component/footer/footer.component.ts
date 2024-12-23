import { Component } from '@angular/core';
import { Property } from '../../../models/property';

@Component({
  selector: 'app-footer',
  standalone: false,
  // imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {


  properties: Property[] = [
    { location: 'Western Cape, South Africa', image:null, rating: 4.94, distance: '8,818 kilometres away', dates: '12-17 Jan', price: '$4,033 TWD night' ,isGuestFavourite : true },
    { location: 'Sindun-myeon, Icheon-si, South Korea',image:null, rating: 4.84, distance: '4,984 kilometres away', dates: '10-15 Jan', price: '$2,383 TWD night' ,isGuestFavourite : true },
    { location: 'Nelson, New Zealand', rating: 4.92,image:null, distance: '12,139 kilometres away', dates: '24-29 Jan', price: '$5,327 TWD night' ,isGuestFavourite : true },
    { location: 'Brålanda, Sweden', rating: 4.96,image:null, distance: '6,374 kilometres away', dates: '1-6 Jan', price: '$14,660 TWD night' ,isGuestFavourite : true },
    { location: 'Hua Hin District, Thailand',image:null, rating: 4.96, distance: '2,670 kilometres away', dates: '16-21 Jan', price: '$3,770 TWD night' ,isGuestFavourite : true },
    { location: 'Kecamatan Kuta Selatan, Indonesia',image:null, rating: 0, distance: '5,436 kilometres away', dates: '23-28 Dec', price: '$91,826 TWD night' ,isGuestFavourite : true },
    { location: 'Terrasini, Italy', rating: 4.9,image:null, distance: '', dates: '', price: '$5,908 TWD night' ,isGuestFavourite : true }, // Note: distance and dates are empty
    { location: 'Râşnov Romacril, Romania',image:null, rating: 4.93, distance: '5,257 kilometres away', dates: '5-10 Jan', price: '$4,012 TWD night' ,isGuestFavourite : true },
  ];

  
}

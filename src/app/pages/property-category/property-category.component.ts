import { Component } from '@angular/core';

@Component({
  selector: 'app-property-category',
  standalone: false,
  // imports: [],
  templateUrl: './property-category.component.html',
  styleUrl: './property-category.component.css'
})
export class PropertyCategoryComponent {
 
  houses = [
    { name: 'Amazing Pools', image: 'https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg' },
    { name: 'Icons', image: 'https://a0.muscache.com/im/pictures/mediaverse/category_icon/original/3e5243c8-4d15-4c6b-97e3-7ba2bb7bb880.png' },
    { name: 'Farms', image: 'https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg' },
    { name: 'Cabins', image: 'https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg' },
    { name: 'National Parks', image: 'https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg' },
  ];

}

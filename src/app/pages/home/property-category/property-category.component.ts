import { Component } from '@angular/core';

@Component({
  selector: 'app-property-category',
  standalone: false,
  // imports: [],
  templateUrl: './property-category.component.html',
  styleUrl: './property-category.component.css'
})
export class PropertyCategoryComponent {

  propertyIcons = [
    { imgUrl: 'https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg', name: 'Amazing Pools' },
    { imgUrl: 'https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg', name: 'Amazing Views' },
    { imgUrl: 'https://a0.muscache.com/pictures/5ed8f7c7-2e1f-43a8-9a39-4edfc81a3325.jpg', name: 'Bed & Breakfast' },
    { imgUrl: 'https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg', name: 'OMG!' },
    { imgUrl: 'https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg', name: 'Beachfront' },
    { imgUrl: 'https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg', name: 'Castles' },
    { imgUrl: 'https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg', name: 'Rooms' },
    { imgUrl: 'https://a0.muscache.com/pictures/c0fa9598-4e37-40f3-b734-4bd0e2377add.jpg', name: 'New' },
    { imgUrl: 'https://a0.muscache.com/im/pictures/mediaverse/category_icon/original/3e5243c8-4d15-4c6b-97e3-7ba2bb7bb880.png', name: 'Icons' },
    { imgUrl: 'https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg', name: 'Farms' },
    { imgUrl: 'https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg', name: 'Cabins' },
    { imgUrl: 'https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg', name: 'National Parks' }
  ];

}

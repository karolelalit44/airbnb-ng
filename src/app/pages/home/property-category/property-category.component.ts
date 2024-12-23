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
    { imgUrl: 'https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg', name: 'National Parks' },
    { imgUrl: 'https://a0.muscache.com/pictures/3271df99-f071-4ecf-9128-eb2d2b1f50f0.jpg', name: 'Tiny Homes' },
    { imgUrl: 'https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg', name: 'Islands' },
    { imgUrl: 'https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg', name: 'Countryside' },
    { imgUrl: 'https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg', name: 'Historical Homes' },
    { imgUrl: 'https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg', name: 'Mansions' },


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
    { imgUrl: 'https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg', name: 'National Parks' },
    { imgUrl: 'https://a0.muscache.com/pictures/3271df99-f071-4ecf-9128-eb2d2b1f50f0.jpg', name: 'Tiny Homes' },
    { imgUrl: 'https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg', name: 'Islands' },
    { imgUrl: 'https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg', name: 'Countryside' },
    { imgUrl: 'https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg', name: 'Historical Homes' },
    { imgUrl: 'https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg', name: 'Mansions' },

  ];

  currentIndex: number = 0;
  iconsPerPage: number = 8;

  get displayedIcons() {
    return this.propertyIcons.slice(this.currentIndex, this.currentIndex + this.iconsPerPage);
  }

  next() {
    if (this.currentIndex + this.iconsPerPage < this.propertyIcons.length) {
      this.currentIndex += this.iconsPerPage;
    }
  }

  prev() {
    if (this.currentIndex - this.iconsPerPage >= 0) {
      this.currentIndex -= this.iconsPerPage;
    }
  }
}

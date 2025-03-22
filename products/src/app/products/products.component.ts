import { Component } from '@angular/core';
import { Product } from '../product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [
    {
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h70/h13/64434418745374.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h06/hdb/64434426511390.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hdf/h94/64434420252702.jpg'
      ],
      name: 'iPhone 14 Pro',
      description: 'Apple iPhone 14 Pro 128GB',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-128gb-fioletovyi-106363283/?c=750000000',
      likes: 0
    },
  ];

  selectedImage: { [key: string]: number } = {};

  changeImage(product: Product, index: number) {
    this.selectedImage[product.name] = index;
  }

  share(product: Product, platform: 'whatsapp' | 'telegram') {
    const encodedLink = encodeURIComponent(product.link);
    const url = platform === 'whatsapp' 
      ? `https://wa.me/?text=${encodedLink}` 
      : `https://t.me/share/url?url=${encodedLink}`;
    window.open(url, '_blank');
  }
}
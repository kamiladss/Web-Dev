import { Injectable } from '@angular/core';
import { Category } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private categories: Category[] = [
    {
      name: 'Smartphones',
      products: [
        {
          id: 1,
          name: 'iPhone 13',
          description: 'Apple iPhone 13 with 128GB storage',
          imageUrls: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
          rating: 4.8,
          kaspiUrl: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-102298744/',
          likes: 0
        },
        {
          id: 2,
          name: 'Samsung Galaxy S22',
          description: 'Samsung Galaxy S22 Ultra 256GB',
          imageUrls: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
          rating: 4.7,
          kaspiUrl: 'https://kaspi.kz/shop/p/samsung-galaxy-s22-ultra-256gb/',
          likes: 0
        }
      ]
    },
    {
      name: 'Laptops',
      products: [
        {
          id: 3,
          name: 'MacBook Pro 16',
          description: 'Apple MacBook Pro 16-inch M1 Pro',
          imageUrls: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
          rating: 4.9,
          kaspiUrl: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-m1-pro/',
          likes: 0
        }
      ]
    }
  ];

  getCategories(): Category[] {
    return this.categories;
  }
}
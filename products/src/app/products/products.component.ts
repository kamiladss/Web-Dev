import { Component } from '@angular/core';
import { Product } from '../products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  template: ` 
  <section class="products">
  <div *ngFor="let product of products" class="product-card">
    <div class="gallery">
      <img [src]="product.images[0]" [alt]="product.name" (click)="changeImage(product, 0)">
      <img [src]="product.images[1]" [alt]="product.name" (click)="changeImage(product, 1)">
      <img [src]="product.images[2]" [alt]="product.name" (click)="changeImage(product, 2)">
    </div>
    <img class="main-image" [src]="product.images[selectedImage[product.name] || 0]" [alt]="product.name">

      <h2>{{ product.name }}</h2>
      <p>{{ product.description }}</p>
      <p>⭐ {{ product.rating }}</p>
      <a [href]="product.link" target="_blank">View on Kaspi</a>
      <div class="buttons">
        <button (click)="share(product, 'whatsapp')">Share on WhatsApp</button>
      </div>
    </div>
  </section>
`,
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [
    {
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h70/h13/64434418745374.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h06/hdb/64434426511390.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/hdf/h94/64434420252702.jpg?format=gallery-medium'],
      name: 'iPhone 14 Pro',
      description: 'Apple iPhone 14 Pro 128GB',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-128gb-fioletovyi-106363283/?c=750000000'
    },
    {
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h5e/h53/69635680763934.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/he0/hae/69635684892702.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/ha3/hd1/69635685941278.jpg?format=gallery-medium'],
      name: 'Samsung Galaxy S23',
      description: 'Samsung Galaxy S23 256GB',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-ultra-12-gb-256-gb-chernyi-109174566/?c=750000000'
    },
    {
      images:[ 'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h86/h70/64509325803550.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h45/hb7/64509328457758.jpg?format=gallery-medium'
      ],
      name: 'MacBook Air M2',
      description: 'Apple MacBook Air 13.6" M2 256GB',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/?c=750000000',
    },
    {
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p8b/p93/10858118.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pae/p90/10858123.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p99/p8d/10858130.png?format=gallery-medium'
      ],
      name: 'PlayStation 5',
      description: 'Sony PlayStation 5 Digital Edition',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-digital-edition-30th-anniversary-edition-130764629/?c=750000000'
    },
    {
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hfd/h66/65114258571294.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hdd/hb1/65114261323806.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h51/hbe/65114264207390.jpg?format=gallery-medium'
      ],
      name: 'Xiaomi Mi Band 7',
      description: 'Xiaomi Mi Band 7 Smart Bracelet',
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/xiaomi-mi-band-7-chernyi-105075100/?c=750000000'
    },
    {
      images: ['https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h14/h8a/84108189761566.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h03/h0e/84108189696030.jpg?format=gallery-medium'
      ],
      name: 'AirPods Pro 2',
      description: 'Apple AirPods Pro 2nd Generation',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-with-type-c-wireless-charging-belyi-113677582/?c=750000000'
    },
    {
      images:[ 'https://resources.cdn-kaspi.kz/img/m/p/hdd/h5e/85887766167582.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h9f/h2f/85887766233118.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h95/hf0/85887766298654.jpg?format=gallery-medium'
      ],
      name: 'Samsung 4K TV',
      description: 'Samsung 55" 4K Smart TV',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/samsung-ue55du7100uxce-140-sm-chernyi-118907988/?c=750000000'
    },
    {
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hfb/h11/81397947301918.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h09/h20/81397947367454.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h95/hf4/85601633173534.jpg?format=gallery-medium'
      ],
      name: 'Dyson V15 Vacuum',
      description: 'Dyson V15 Detect Absolute Vacuum Cleaner',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/dyson-v15-detect-absolute-serebristyi-110975356/?c=750000000'
    },
    {
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p91/p09/4501643.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pae/p09/4501644.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pca/p09/4501645.png?format=gallery-medium'
      ],
      name: 'GoPro HERO11',
      description: 'GoPro HERO11 Black Action Camera',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/ekshn-kamera-gopro-hero13-black-accessories-bundle-128879262/?c=750000000'
    },
    {
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hba/h67/64374646538270.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hb0/h6c/64374649651230.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h40/h36/64374654369822.jpg?format=gallery-medium'
      ],
      name: 'Bose QuietComfort 45',
      description: 'Bose QuietComfort 45 Noise Cancelling Headphones',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/bose-quietcomfort-45-chernyi-102978612/?c=750000000'
    }
  ];
  share(product: Product, platform: 'whatsapp') {
    const encodedLink = encodeURIComponent(product.link);
    if (platform === 'whatsapp') {
      window.open(`https://wa.me/?text=${encodedLink}`, '_blank');
    }
  }
  selectedImage: { [key: string]: number } = {};

  changeImage(product: Product, index: number) {
    this.selectedImage[product.name] = index;
}
}

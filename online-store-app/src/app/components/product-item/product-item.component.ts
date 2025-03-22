import { Component, Input } from '@angular/core';
import { Product } from '../../models';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-product-item',
  imports:[CommonModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product;

  shareOnWhatsApp() {
    window.open(`https://wa.me/?text=Check out this product: ${this.product.kaspiUrl}`, '_blank');
  }

  likeProduct() {
    this.product.likes++;
  }
}

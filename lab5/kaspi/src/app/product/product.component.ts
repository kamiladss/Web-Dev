import {Component, EventEmitter, Input, Output} from '@angular/core';
import { ProductInfo } from '../../../interfaces/product-info';
import {ShareButtonsComponent} from '../share-buttons/share-buttons.component';

@Component({
  selector: 'app-product',
  imports: [
    ShareButtonsComponent
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  @Input() product!: ProductInfo;
  @Output() remove = new EventEmitter<ProductInfo>();

  addLike() {
    this.product.likes++; // Increase the likes count
  }

  deleteProduct() {
    this.remove.emit(this.product); // Emit the product, NOT the event!
  }
}



import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../../models';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  imports:[ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnChanges {
  @Input() products: Product[] = [];

  ngOnChanges(changes: SimpleChanges) {
    console.log('Product list updated:', changes['products'].currentValue); // Debugging
  }
}

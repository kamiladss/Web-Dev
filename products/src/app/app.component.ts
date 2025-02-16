import {Component} from '@angular/core';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-root',
  imports: [ProductsComponent],
  template: `
    <app-products></app-products>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Ptoducts';
}

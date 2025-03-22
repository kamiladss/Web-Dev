import { Component } from '@angular/core';
import { ProductService } from './services/product.service';
import { Category } from './models';
import { ProductListComponent } from './components/product-list/product-list.component';

@Component({
  selector: 'app-root',
  imports:[ProductListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories: Category[];
  selectedCategory: Category | null = null;

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
  }

  selectCategory(category: Category) {
    console.log('Category selected:', category); // Debugging
    this.selectedCategory = category;
  }
}

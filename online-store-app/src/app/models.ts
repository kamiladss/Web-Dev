export interface Product {
    id: number;
    name: string;
    description: string;
    imageUrls: string[];
    rating: number;
    kaspiUrl: string;
    likes: number;
  }
  
  export interface Category {
    name: string;
    products: Product[];
  }
  
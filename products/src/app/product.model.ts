export interface Product {
    images: string[];
    name: string;
    description: string;
    rating: number;
    link: string;
    likes:number;
}
export interface Category {
    name: string;
    products: Product[];
  }

export interface Product {
  id: number;
  link: string;
  name: string;
  img: string[];
  price: number;
  description: string;
  rating: string;
}

export class Product {
  id: number;
  link: string;
  name: string;
  img: string[];
  price: number;
  description: string;
  rating: string;

  constructor(
    id: number,
    link: string,
    name: string,
    img: string[],
    price: number,
    description: string,
    rating: string
  ) {
    this.id = id;
    this.link = link;
    this.name = name;
    this.img = img;
    this.price = price;
    this.description = description;
    this.rating = rating;
  }
}

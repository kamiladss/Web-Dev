import { Component, Input } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import {ProductComponent} from './product/product.component';
import { ProductInfo } from '../.././interfaces/product-info';
import {CommonModule, NgForOf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ProductComponent, NgForOf, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task2';

  selectedCategoryId: number | null = null;

  selectCategory(categoryId: number |null) {
    this.selectedCategoryId = categoryId;
  }

  products: ProductInfo[] = [
    {
      name: 'Клир Д.: Атомные привычки',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h4c/h9a/86244289314846.png?format=gallery-large',
      description: '',
      rating: '★★★★★',
      commentsNumber: 203,
      price: 2197,
      href: 'https://kaspi.kz/shop/p/klir-d-atomnye-privychki-117680550/?c=750000000',
      categoryId: 3,
      likes: 0 // Initial likes
    },
    {
      name: 'Книга Кавамура Г.: Если все кошки в мире исчезнут',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h30/h4f/80896193953822.jpg?format=gallery-large',
      description: '',
      rating: '★★★★★',
      commentsNumber: 17,
      price: 2150,
      href: 'https://kaspi.kz/shop/p/kavamura-g-esli-vse-koshki-v-mire-ischeznut-110504863/?c=750000000',
      categoryId: 2,
      likes: 0 
    },
    {
      name: 'Олкотт Л. М.: Маленькие женщины',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h78/he7/80549372231710.jpg?format=gallery-large',
      description: '',
      rating: '★★★★★',
      commentsNumber: 28,
      price: 1358 ,
      href: 'https://kaspi.kz/shop/p/olkott-l-m-malen-kie-zhenschiny-110124812/?c=750000000',
      categoryId: 1,
      likes: 0 

    },
    {
      name: 'Антуан де Сент-Экзюпери: Маленький принц',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hae/h68/64330738303006.jpg?format=gallery-large',
      description: '',
      rating: '★★★★★',
      commentsNumber: 12,
      price: 1550,
      href: 'https://kaspi.kz/shop/p/antuan-de-sent-ekzjuperi-malen-kii-prints-103500777/?c=750000000',
      categoryId: 1,
      likes: 0 // Initial likes
    },
    {
      name: 'Книга Мураками Х.: Мой любимый sputnik',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9b/h33/63813476778014.jpg?format=gallery-large',
      description: '',
      rating: '★★★★★',
      commentsNumber: 9,
      price: 3848,
      href: 'https://kaspi.kz/shop/p/murakami-h-moi-ljubimyi-sputnik-26003817/?c=750000000',
      categoryId: 2,
      likes: 0 // Initial likes
    },
    {
      name: 'Мосян Тунсю: Благословение небожителей. Том 1',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hec/hf7/64458940448798.jpg?format=gallery-large',
      description: '',
      rating: '★★★★★',
      commentsNumber: 70,
      price: 7000,
      href: 'https://kaspi.kz/shop/p/mosjan-tunsju-blagoslovenie-nebozhitelei-tom-1-104139708/?c=750000000',
      categoryId: 4,
      likes: 0 // Initial likes
    },
    {
      name: 'Бастеррика А.: Особое мясо',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h16/h41/64053600714782.jpg?format=gallery-large',
      description: '',
      rating: '★★★★★',
      commentsNumber: 10,
      price: 4990,
      href: 'https://kaspi.kz/shop/p/basterrika-a-osoboe-mjaso-100952846/?c=750000000',
      categoryId: 2,
      likes: 0 // Initial likes
    },
    {
      name: 'Книга Кафка Ф.: Превращение',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h85/h15/63935266553886.jpg?format=gallery-large',
      description: '',
      rating: '★★★★★',
      commentsNumber: 11,
      price: 1823,
      href: 'https://kaspi.kz/shop/p/kafka-f-prevraschenie-100308970/?c=750000000',
      categoryId: 1,
      likes: 0 // Initial likes
    },
    {
      name: 'Окакура К.: Книга чая',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h25/h63/84618059186206.jpg?format=gallery-large',
      description: '',
      rating: '★★★★★',
      commentsNumber: 6,
      price: 1600,
      href: 'https://kaspi.kz/shop/p/okakura-k-kniga-chaja-115005434/?c=750000000',
      categoryId: 3,
      likes: 0 // Initial likes
    },
    {
      name: 'Исида С.: Токийский гуль: re. Том 7',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h12/hef/64362696900638.jpg?format=gallery-large',
      description: '',
      rating: '★★★★★',
      commentsNumber: 13,
      price: 7250,
      href: 'https://kaspi.kz/shop/p/isida-s-tokiiskii-gul-re-tom-7-103331124/?c=750000000',
      categoryId: 4,
      likes: 0 // Initial likes
    },

  ];


  get filteredProducts(): ProductInfo[] {
    if (this.selectedCategoryId === null) {
      return this.products;
    }
    return this.products.filter(product => product.categoryId === this.selectedCategoryId);
  }

  removeProduct(product: ProductInfo) {
    this.products = this.products.filter(p => p !== product);
  }

}
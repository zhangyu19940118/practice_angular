import { Component, OnInit } from '@angular/core';
import {Product, ProductService} from '../shared/product.service';
import {FormControl} from '@angular/forms';
import 'rxjs/Rx';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public products: Product[];

  private keyword: string;

  private titleFilter: FormControl = new FormControl();

  private imgUrl = 'http://placehold.it/320x150';

  constructor(private productService: ProductService) {
    this.titleFilter.valueChanges
      .debounceTime(500)
      .subscribe(
        value => this.keyword = value
      );
  }

  ngOnInit() {
    this.products = this.productService.getProducts();

    // this.products: Product[] = [
    //   new Product(1, 'MacBook', 12430, 4.6, '这是第一个商品描述,这是一款时尚又实用的电子产品', ['Electronic']),
    //   new Product(2, 'kindle', 788, 4, '这是第一个商品描述,这是一款时尚又实用的电子产品', ['Hardware', 'book']),
    //   new Product(3, 'iPad', 1258, 3.5, '这是第一个商品描述,这是一款时尚又实用的电子产品', ['Electronic', 'book']),
    //   new Product(4, 'iPhone', 8700, 3, '这是第一个商品描述,这是一款时尚又实用的电子产品', ['Electronic']),
    //   new Product(5, 'Lenovo', 5621, 3.5, '这是第一个商品描述,这是一款时尚又实用的电子产品', ['Electronic', 'Hardware', 'book']),
    //   new Product(6, 'ThinkPad', 4888, 3.8, '这是第一个商品描述,这是一款时尚又实用的电子产品', ['Electronic', 'Hardware'])
    // ];
  }

}

// export class Product {
//   constructor(
//     public id: number,
//     public title: string,
//     public price: number,
//     public rating: number,
//     public desc: string,
//     public categories: Array<string>
//   ) {}
// }


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    new Product(1, 'MacBook', 12430, 4.6, '这是第一个商品描述,这是一款时尚又实用的电子产品', ['Electronic']),
    new Product(2, 'kindle', 788, 4, '这是第一个商品描述,这是一款时尚又实用的电子产品', ['Hardware', 'book']),
    new Product(3, 'iPad', 1258, 3.5, '这是第一个商品描述,这是一款时尚又实用的电子产品', ['Electronic', 'book']),
    new Product(4, 'iPhone', 8700, 3, '这是第一个商品描述,这是一款时尚又实用的电子产品', ['Electronic']),
    new Product(5, 'Lenovo', 5621, 3.5, '这是第一个商品描述,这是一款时尚又实用的电子产品', ['Electronic', 'Hardware', 'book']),
    new Product(6, 'ThinkPad', 4888, 3.8, '这是第一个商品描述,这是一款时尚又实用的电子产品', ['Electronic', 'Hardware'])
  ];

  private comments: Comment[] = [
    new Comment(1, 1, '2017-02-02 22:22:22', 'zhangsan', 3, '东西好用'),
    new Comment(2, 1, '2017-02-03 22:22:22', 'xiaohong', 3, '东西不好用'),
    new Comment(3, 2, '2017-02-04 22:22:22', 'lisi', 3, '东西很好用'),
    new Comment(4, 1, '2017-02-05 22:22:22', 'wangwu', 3, '东西太好用')
  ];

  constructor() { }

  getAllCategories(): string[] {
    return ['Electronic', 'Hardware', 'book'];
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product {
    return this.products.find((product) => product.id == id);
  }

  getCommentsForProductId(id: number): Comment[] {
    return this.comments.filter((comment: Comment) => comment.productId == id);
  }
}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {}
}

export class Comment {
  constructor(
    public id: number,
    public productId: number,
    public timestamp: string,
    public user: string,
    public rating: number,
    public content: string

  ) {}
}

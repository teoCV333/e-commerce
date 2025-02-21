import { Injectable, signal } from '@angular/core';
import { Product } from '../interfaces/product';

interface State {
  products: Product[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  #state = signal<State>({
    loading: false,
    products: [],
  });

  products: Product[] = [
    {
      id: '1',
      image: 'assets/media/images/products/f1.jpg',
      brand: 'adidas',
      category: `Men's Fashion T shirt`,
      title: 'Cartoon Astronaut T-Shirts',
      description: `The Gildan Ultra Cotton T-Shirt is made from a substantial 6.0 oz. per
            sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey
            knit provides unmatched comfort with each wear. Featuring a taped neck and
            shoulder, and a seamless double-needle collar, and available in a range of
            colors, it offers it all in the ultimate head-turning package.`,
      score: 5,
      price: 78,
      quantity: 10,
      datePosted: new Date('10-02-2025'),
    },
    {
      id: '2',
      image: 'assets/media/images/products/f2.jpg',
      brand: 'adidas',
      category: `Men's Fashion T shirt`,
      title: 'Cartoon Astronaut T-Shirts',
      description: `The Gildan Ultra Cotton T-Shirt is made from a substantial 6.0 oz. per
            sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey
            knit provides unmatched comfort with each wear. Featuring a taped neck and
            shoulder, and a seamless double-needle collar, and available in a range of
            colors, it offers it all in the ultimate head-turning package.`,
      score: 5,
      price: 78,
      quantity: 10,
      datePosted: new Date('10-02-2025'),
    },
    {
      id: '3',
      image: 'assets/media/images/products/f3.jpg',
      brand: 'adidas',
      category: `Men's Fashion T shirt`,
      title: 'Cartoon Astronaut T-Shirts',
      description: `The Gildan Ultra Cotton T-Shirt is made from a substantial 6.0 oz. per
            sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey
            knit provides unmatched comfort with each wear. Featuring a taped neck and
            shoulder, and a seamless double-needle collar, and available in a range of
            colors, it offers it all in the ultimate head-turning package.`,
      score: 5,
      price: 78,
      quantity: 10,
      datePosted: new Date('10-02-2025'),
    },
    {
      id: '4',
      image: 'assets/media/images/products/f4.jpg',
      brand: 'adidas',
      category: `Men's Fashion T shirt`,
      title: 'Cartoon Astronaut T-Shirts',
      description: `The Gildan Ultra Cotton T-Shirt is made from a substantial 6.0 oz. per
            sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey
            knit provides unmatched comfort with each wear. Featuring a taped neck and
            shoulder, and a seamless double-needle collar, and available in a range of
            colors, it offers it all in the ultimate head-turning package.`,
      score: 5,
      price: 78,
      quantity: 10,
      datePosted: new Date('10-02-2025'),
    },
    {
      id: '5',
      image: 'assets/media/images/products/f5.jpg',
      brand: 'adidas',
      category: `Men's Fashion T shirt`,
      title: 'Cartoon Astronaut T-Shirts',
      description: `The Gildan Ultra Cotton T-Shirt is made from a substantial 6.0 oz. per
            sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey
            knit provides unmatched comfort with each wear. Featuring a taped neck and
            shoulder, and a seamless double-needle collar, and available in a range of
            colors, it offers it all in the ultimate head-turning package.`,
      score: 5,
      price: 78,
      quantity: 10,
      datePosted: new Date('10-02-2025'),
    },
    {
      id: '6',
      image: 'assets/media/images/products/f6.jpg',
      brand: 'adidas',
      category: `Men's Fashion T shirt`,
      title: 'Cartoon Astronaut T-Shirts',
      description: `The Gildan Ultra Cotton T-Shirt is made from a substantial 6.0 oz. per
            sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey
            knit provides unmatched comfort with each wear. Featuring a taped neck and
            shoulder, and a seamless double-needle collar, and available in a range of
            colors, it offers it all in the ultimate head-turning package.`,
      score: 5,
      price: 78,
      quantity: 10,
      datePosted: new Date('10-02-2025'),
    },
    {
      id: '7',
      image: 'assets/media/images/products/f7.jpg',
      brand: 'adidas',
      category: `Men's Fashion T shirt`,
      title: 'Cartoon Astronaut T-Shirts',
      description: `The Gildan Ultra Cotton T-Shirt is made from a substantial 6.0 oz. per
            sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey
            knit provides unmatched comfort with each wear. Featuring a taped neck and
            shoulder, and a seamless double-needle collar, and available in a range of
            colors, it offers it all in the ultimate head-turning package.`,
      score: 5,
      price: 78,
      quantity: 10,
      datePosted: new Date('10-02-2025'),
    },
    {
      id: '8',
      image: 'assets/media/images/products/f8.jpg',
      brand: 'adidas',
      category: `Men's Fashion T shirt`,
      title: 'Cartoon Astronaut T-Shirts',
      description: `The Gildan Ultra Cotton T-Shirt is made from a substantial 6.0 oz. per
            sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey
            knit provides unmatched comfort with each wear. Featuring a taped neck and
            shoulder, and a seamless double-needle collar, and available in a range of
            colors, it offers it all in the ultimate head-turning package.`,
      score: 5,
      price: 78,
      quantity: 10,
      datePosted: new Date('10-02-2025'),
    },
    {
      id: '9',
      image: 'assets/media/images/products/n1.jpg',
      brand: 'adidas',
      category: `Men's Fashion T shirt`,
      title: 'Cartoon Astronaut T-Shirts',
      description: `The Gildan Ultra Cotton T-Shirt is made from a substantial 6.0 oz. per
            sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey
            knit provides unmatched comfort with each wear. Featuring a taped neck and
            shoulder, and a seamless double-needle collar, and available in a range of
            colors, it offers it all in the ultimate head-turning package.`,
      score: 5,
      price: 78,
      quantity: 10,
      datePosted: new Date('10-02-2025'),
    },
    {
      id: '10',
      image: 'assets/media/images/products/n2.jpg',
      brand: 'adidas',
      category: `Men's Fashion T shirt`,
      title: 'Cartoon Astronaut T-Shirts',
      description: `The Gildan Ultra Cotton T-Shirt is made from a substantial 6.0 oz. per
            sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey
            knit provides unmatched comfort with each wear. Featuring a taped neck and
            shoulder, and a seamless double-needle collar, and available in a range of
            colors, it offers it all in the ultimate head-turning package.`,
      score: 5,
      price: 78,
      quantity: 10,
      datePosted: new Date('10-02-2025'),
    },
    {
      id: '11',
      image: 'assets/media/images/products/n3.jpg',
      brand: 'adidas',
      category: `Men's Fashion T shirt`,
      title: 'Cartoon Astronaut T-Shirts',
      description: `The Gildan Ultra Cotton T-Shirt is made from a substantial 6.0 oz. per
            sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey
            knit provides unmatched comfort with each wear. Featuring a taped neck and
            shoulder, and a seamless double-needle collar, and available in a range of
            colors, it offers it all in the ultimate head-turning package.`,
      score: 5,
      price: 78,
      quantity: 10,
      datePosted: new Date('10-02-2025'),
    },
    {
      id: '12',
      image: 'assets/media/images/products/n4.jpg',
      brand: 'adidas',
      category: `Men's Fashion T shirt`,
      title: 'Cartoon Astronaut T-Shirts',
      description: `The Gildan Ultra Cotton T-Shirt is made from a substantial 6.0 oz. per
            sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey
            knit provides unmatched comfort with each wear. Featuring a taped neck and
            shoulder, and a seamless double-needle collar, and available in a range of
            colors, it offers it all in the ultimate head-turning package.`,
      score: 5,
      price: 78,
      quantity: 10,
      datePosted: new Date('10-02-2025'),
    },
    {
      id: '13',
      image: 'assets/media/images/products/n5.jpg',
      brand: 'adidas',
      category: `Men's Fashion T shirt`,
      title: 'Cartoon Astronaut T-Shirts',
      description: `The Gildan Ultra Cotton T-Shirt is made from a substantial 6.0 oz. per
            sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey
            knit provides unmatched comfort with each wear. Featuring a taped neck and
            shoulder, and a seamless double-needle collar, and available in a range of
            colors, it offers it all in the ultimate head-turning package.`,
      score: 5,
      price: 78,
      quantity: 10,
      datePosted: new Date('10-02-2025'),
    },
    {
      id: '14',
      image: 'assets/media/images/products/n6.jpg',
      brand: 'adidas',
      category: `Men's Fashion T shirt`,
      title: 'Cartoon Astronaut T-Shirts',
      description: `The Gildan Ultra Cotton T-Shirt is made from a substantial 6.0 oz. per
            sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey
            knit provides unmatched comfort with each wear. Featuring a taped neck and
            shoulder, and a seamless double-needle collar, and available in a range of
            colors, it offers it all in the ultimate head-turning package.`,
      score: 5,
      price: 78,
      quantity: 10,
      datePosted: new Date('10-02-2025'),
    },
    {
      id: '15',
      image: 'assets/media/images/products/n7.jpg',
      brand: 'adidas',
      category: `Men's Fashion T shirt`,
      title: 'Cartoon Astronaut T-Shirts',
      description: `The Gildan Ultra Cotton T-Shirt is made from a substantial 6.0 oz. per
            sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey
            knit provides unmatched comfort with each wear. Featuring a taped neck and
            shoulder, and a seamless double-needle collar, and available in a range of
            colors, it offers it all in the ultimate head-turning package.`,
      score: 5,
      price: 78,
      quantity: 10,
      datePosted: new Date('10-02-2025'),
    },
    {
      id: '16',
      image: 'assets/media/images/products/n8.jpg',
      brand: 'adidas',
      category: `Men's Fashion T shirt`,
      title: 'Cartoon Astronaut T-Shirts',
      description: `The Gildan Ultra Cotton T-Shirt is made from a substantial 6.0 oz. per
            sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey
            knit provides unmatched comfort with each wear. Featuring a taped neck and
            shoulder, and a seamless double-needle collar, and available in a range of
            colors, it offers it all in the ultimate head-turning package.`,
      score: 5,
      price: 78,
      quantity: 10,
      datePosted: new Date('10-02-2025'),
    },
  ];
  constructor() {}

  getProductById(id: string) {
    return this.products.filter((product) => product.id === id);
  }
}

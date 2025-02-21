import { Injectable, signal } from '@angular/core';
import { Blog } from '../interfaces/blog';

interface State {
  blogs: Blog[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  #state = signal<State>({
    loading: false,
    blogs: [],
  });

  blogs = signal<Blog[]>([
    {
      id: '1',
      img: 'assets/media/images/blog/b1.jpg',
      title: 'The Cotton-Jersey Zip-Up Hoodie',
      text: `Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr
                wolf chartreuse hexagon irony, godard...`,
      datePosted: new Date('02-19-2025'),
    },
    {
      id: '2',
      img: 'assets/media/images/blog/b2.jpg',
      title: 'How to Style a Quiff',
      text: `Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr
                wolf chartreuse hexagon irony, godard...`,
      datePosted: new Date('02-10-2025'),
    },
    {
      id: '3',
      img: 'assets/media/images/blog/b3.jpg',
      title: 'Must-Have Skater Girl Items',
      text: `Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr
                wolf chartreuse hexagon irony, godard...`,
      datePosted: new Date('02-5-2025'),
    },
    {
      id: '4',
      img: 'assets/media/images/blog/b4.jpg',
      title: 'Runway-inspired Trends',
      text: `Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr
                wolf chartreuse hexagon irony, godard...`,
      datePosted: new Date('02-01-2025'),
    },
    {
      id: '5',
      img: 'assets/media/images/blog/b6.jpg',
      title: 'AW20 Menswear Trends',
      text: `Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr
                wolf chartreuse hexagon irony, godard...`,
      datePosted: new Date('01-15-2025'),
    },
  ]);
  constructor() {}
}

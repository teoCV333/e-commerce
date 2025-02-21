import { Component, inject, OnInit } from '@angular/core';
import { PageHeaderComponent } from '../../../shared/page-header/page-header.component';
import { BlogService } from '../../../services/blog.service';
import { CommonModule, DatePipe } from '@angular/common';
import { Blog } from '../../../interfaces/blog';

@Component({
  selector: 'app-blog',
  imports: [PageHeaderComponent, DatePipe],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export default class BlogComponent {
  blogService = inject(BlogService);
  blogItems: Blog[] = [];

  public pageHeaderData = {
    title: '#leermás',
    text: '¡Descubre todo acerca nuestros productos!',
    bg: 'b1.jpg',
  };

  constructor() {
    this.blogItems = this.blogService.blogs();
  }
}

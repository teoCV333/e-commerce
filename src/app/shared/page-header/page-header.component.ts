import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

interface PageHeaderData {
  title: string;
  text: string;
  bg: string;
}

@Component({
  selector: 'app-page-header',
  imports: [CommonModule],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.css',
})
export class PageHeaderComponent implements OnInit {
  @Input({ required: true }) data!: PageHeaderData;

  ngOnInit(): void {
    this.setBackgroundImage(
      `url("assets/media/images/banner/${this.data.bg}")`
    );
  }

  setBackgroundImage(url: string): void {
    document.documentElement.style.setProperty('--background-color', url);
  }
}

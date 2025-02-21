import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banners',
  imports: [],
  templateUrl: './banners.component.html',
  styleUrl: './banners.component.css',
})
export class BannersComponent {
  @Input({ required: true }) banner!: string;
}

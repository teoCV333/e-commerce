import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../../shared/page-header/page-header.component';
import { FeatureComponent } from '../../../shared/feature/feature.component';
import { NewsletterComponent } from '../../../shared/newsletter/newsletter.component';

@Component({
  selector: 'app-about',
  imports: [PageHeaderComponent, FeatureComponent, NewsletterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export default class AboutComponent {
  public pageHeaderData = {
    title: '#conocenos',
    text: 'Lorem ipsum dolor sit amet, consectetur',
    bg: 'b1.jpg',
  };
}

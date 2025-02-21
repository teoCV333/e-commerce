import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../../shared/page-header/page-header.component';
import { People } from '../../../interfaces/people';
import { NewsletterComponent } from '../../../shared/newsletter/newsletter.component';

@Component({
  selector: 'app-contact',
  imports: [PageHeaderComponent, NewsletterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export default class ContactComponent {
  public pageHeaderData = {
    title: '#hablemos',
    text: 'ESCRÍBENOS, ¡Nos encanta estar en contacto contigo!',
    bg: 'b1.jpg',
  };

  people: People[] = [
    {
      id: '1',
      img: 'assets/media/images/people/1.png',
      name: 'John Doe',
      title: 'Senior Marketing Manager',
      phone: '+ 000 123 000 77 88',
      email: 'contact@example.com',
    },
    {
      id: '2',
      img: 'assets/media/images/people/2.png',
      name: 'William Smith',
      title: 'Senior Marketing Manager',
      phone: '+ 000 123 000 77 88',
      email: 'contact@example.com',
    },
    {
      id: '3',
      img: 'assets/media/images/people/3.png',
      name: 'Emma Stone',
      title: 'Senior Marketing Manager',
      phone: '+ 000 123 000 77 88',
      email: 'contact@example.com',
    },
    {
      id: '4',
      img: 'assets/media/images/people/1.png',
      name: 'Juan García',
      title: 'Senior Marketing Manager',
      phone: '+ 000 123 000 77 88',
      email: 'contact@example.com',
    },
  ];
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-feature',
  imports: [],
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.css',
})
export class FeatureComponent {
  public featureItems = [
    {
      src: 'assets/media/images/features/f1.png',
      title: 'Envío Gratis',
    },
    {
      src: 'assets/media/images/features/f2.png',
      title: 'Compra en Línea',
    },
    {
      src: 'assets/media/images/features/f3.png',
      title: 'Ahorra Dinero',
    },
    {
      src: 'assets/media/images/features/f4.png',
      title: 'Promociones',
    },
    {
      src: 'assets/media/images/features/f5.png',
      title: 'Ofertas Imperdibles',
    },
    {
      src: 'assets/media/images/features/f6.png',
      title: 'Soporte 24/7',
    },
  ];
}

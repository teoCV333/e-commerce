import { CommonModule } from '@angular/common';
import { Component, NgModule, signal } from '@angular/core';

@Component({
  selector: 'app-auth',
  imports: [CommonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export default class AuthComponent {
  rigthPanelActive = signal<boolean>(false);
  showForgotPassModal = signal<boolean>(false);
  overlayBtn = document.getElementById('overlayBtn');

  toggle() {
    this.rigthPanelActive.update((current) => !current);
    this.overlayBtn?.classList.remove('btnScaled');
    window.requestAnimationFrame(() => {
      this.overlayBtn?.classList.add('btnScaled');
    });
  }

  toggleForgotModal() {
    this.showForgotPassModal.update((current) => !current);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-spinner',
  template: ` <div class="spinner"></div> `,
  styles: [
    `
      .spinner {
        border: 2px solid currentColor;
        border-right-color: transparent;
        border-radius: 50%;
        width: 16px;
        height: 16px;
        animation: spin 0.8s linear infinite;
        display: inline-block;
        vertical-align: middle;
      }
      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }
    `,
  ],
})
export class SpinnerComponent {}

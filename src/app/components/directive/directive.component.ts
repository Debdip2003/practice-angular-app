import { Component } from '@angular/core';
import { Spinner } from '../spinner';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss'],
  imports: [Spinner],
})
export class DirectiveComponent {
  isLoading: boolean = false;

  submitForm(): void {
    this.isLoading = true;
  }
}

import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { Spinner } from '../spinner';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss'],
  imports: [Spinner],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DirectiveComponent {
  numberofTicks: number = 0;
  // data: number[] = [1, 2, 3, 4, 5, 6];
  isLoading: boolean = false;

  constructor(private ref: ChangeDetectorRef) {
    ref.detach();
    setInterval(() => {
      this.numberofTicks++;
      // this.ref.detectChanges();
      this.ref.markForCheck();
    }, 5000);
    // console.log(this.data);
    console.log(this.numberofTicks);
  }

  submitForm(): void {
    this.isLoading = true;
  }
}

import {
  ComponentRef,
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
  ViewContainerRef,
} from '@angular/core';
import { SpinnerComponent } from './spinner/spinner.component';

@Directive({
  selector: '[appSpinner]',
})
export class Spinner implements OnChanges {
  @Input('appSpinner') isLoading: boolean = false;
  private spinnerRef?: ComponentRef<SpinnerComponent>;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private vcr: ViewContainerRef
  ) {
    // Make host element a positioning container
    this.renderer.setStyle(this.el.nativeElement, 'position', 'relative');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isLoading']) {
      if (this.isLoading) {
        this.addSpinner();
        this.renderer.setProperty(this.el.nativeElement, 'disabled', true);
      } else {
        this.removeSpinner();
        this.renderer.setProperty(this.el.nativeElement, 'disabled', false);
      }
    }
  }

  private addSpinner(): void {
    if (this.spinnerRef) return;

    this.spinnerRef = this.vcr.createComponent(SpinnerComponent);

    this.renderer.appendChild(
      this.el.nativeElement,
      this.spinnerRef.location.nativeElement
    );

    this.renderer.setStyle(this.el.nativeElement, 'color', 'transparent');
  }

  private removeSpinner(): void {
    if (this.spinnerRef) {
      this.spinnerRef.destroy();
      this.spinnerRef = undefined;
      this.renderer.removeStyle(this.el.nativeElement, 'color');
    }
  }
}

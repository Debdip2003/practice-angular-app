import {
  ComponentFactoryResolver,
  Directive,
  ElementRef,
  Input,
  Renderer2,
  SimpleChanges,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appSpinner]',
})
export class Spinner {
  @Input('appSpinner') isLoading: boolean = false;
  private spinnerRef: any; // Reference to the created spinner component

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

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
    if (this.spinnerRef) return; // Prevent adding multiple spinners

    const factory =
      this.componentFactoryResolver.resolveComponentFactory(Spinner);
    this.spinnerRef = this.viewContainerRef.createComponent(factory);
    this.renderer.appendChild(
      this.el.nativeElement,
      this.spinnerRef.location.nativeElement
    );

    // Optionally, hide button text while spinner is active
    this.renderer.setStyle(this.el.nativeElement, 'color', 'transparent');
  }

  private removeSpinner(): void {
    if (this.spinnerRef) {
      this.spinnerRef.destroy();
      this.spinnerRef = null;

      // Restore button text color
      this.renderer.removeStyle(this.el.nativeElement, 'color');
    }
  }
}

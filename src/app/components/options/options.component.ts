import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss'],
})
export class OptionsComponent {
  value = input<string>();
  select = output<string>();

  onSelect() {
    const v = this.value();
    if (v !== undefined) {
      this.select.emit(v);
    }
  }
}

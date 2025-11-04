import {
  AfterContentInit,
  Component,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { OptionsComponent } from '../options/options.component';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements AfterContentInit {
  @ContentChildren(OptionsComponent) options!: QueryList<OptionsComponent>;

  isOpen = false;
  selectedValue: string = 'Select an option';

  ngAfterContentInit() {
    this.options.forEach((option) => {
      option.select.subscribe((value: string) => {
        this.selectedValue = value;
        this.isOpen = false;
      });
    });
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
}

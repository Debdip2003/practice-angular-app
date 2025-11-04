import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.page.html',
  styleUrls: ['./view-child.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class ViewChildPage implements AfterViewInit {
  @ViewChild('radiobtn1') radiobtn1!: ElementRef;

  ngAfterViewInit(): void {
    if (this.radiobtn1) {
      console.log(this.radiobtn1.nativeElement.value);
    }
  }
}

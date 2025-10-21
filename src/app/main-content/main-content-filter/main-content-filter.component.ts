import { Component, OnInit } from '@angular/core';
import {
  IonLabel,
  IonSegment,
  IonSegmentButton,
  IonToolbar,
  IonHeader,
  IonButton,
  IonIcon,
  IonButtons, IonChip } from '@ionic/angular/standalone';

@Component({
  selector: 'app-main-content-filter',
  templateUrl: './main-content-filter.component.html',
  styleUrls: ['./main-content-filter.component.css'],
  imports: [IonChip, 
    IonButtons,
    IonIcon,
    IonButton,
    IonHeader,
    IonToolbar,
    IonSegmentButton,
    IonSegment,
    IonLabel
],
})
export class MainContentFilterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

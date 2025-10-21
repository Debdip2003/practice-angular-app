import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonButton,
  IonIcon,
  IonSegment,
  IonSegmentButton,
  IonLabel,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-main-content-header',
  templateUrl: './main-content-header.component.html',
  styleUrls: ['./main-content-header.component.css'],
  imports: [
    IonLabel,
    IonSegmentButton,
    IonSegment,
    IonIcon,
    IonButton,
    IonTitle,
    IonBackButton,
    IonButtons,
    IonToolbar,
    IonHeader,
    CommonModule,
  ],
})
export class MainContentHeaderComponent implements OnInit {
  segmentLabel = [
    { label: 'Price Movers' },
    { label: 'Volume Shockers' },
    { label: '52 Week High Low' },
    { label: 'All Time High Low' },
    { label: 'Most Visited' },
  ];

  constructor() {}

  ngOnInit() {}
}

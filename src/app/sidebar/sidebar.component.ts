import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonItem,
  IonLabel,
  IonList,
} from '@ionic/angular/standalone';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  standalone: true,
  imports: [IonList, CommonModule, IonToolbar, IonHeader, IonLabel, IonItem],
})
export class SidebarComponent implements OnInit {
  hoveredItem: string = '';
  menuItems = [
    { label: 'Market Home' },
    { label: 'Indices' },
    { label: 'Investment Cases' },
    { label: 'Trending Stocks' },
    { label: 'News and Updates' },
    { label: 'Deals' },
  ];
  constructor() {}

  ngOnInit() {}
}

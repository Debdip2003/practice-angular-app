import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonItem, IonLabel, IonList, IonContent, IonApp, IonMenu } from '@ionic/angular/standalone';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  standalone: true,
  imports: [IonApp,
    IonContent,
    IonList,
    CommonModule,
    IonToolbar,
    IonHeader,
    IonLabel,
    IonItem, IonMenu],
})
export class SidebarComponent implements OnInit {
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

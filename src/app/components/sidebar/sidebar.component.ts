import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonList, IonItem, IonIcon, IonLabel, IonMenuToggle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  imports: [IonLabel, IonIcon, IonItem, IonList, CommonModule, IonMenuToggle],
})
export class SidebarComponent implements OnInit {
  menuItems = [
    { label: 'Market Home', icon: 'home-outline' },
    { label: 'Indices', icon: 'bar-chart-outline' },
    { label: 'Investment Cases', icon: 'briefcase-outline', badge: 'New' },
    { label: 'Trending Stocks', icon: 'trending-up-outline' },
    { label: 'News & Updates', icon: 'newspaper-outline' },
    { label: 'Deals', icon: 'cash-outline' },
    { label: 'FII / DII Activity', icon: 'stats-chart-outline' },
    { label: 'Sectors', icon: 'business-outline' },
    { label: 'IPO', icon: 'rocket-outline' },
    { label: 'Investors', icon: 'people-outline' },
    { label: 'SME Zone', icon: 'storefront-outline' },
    { label: 'Learn', icon: 'book-outline' },
  ];
  constructor() {}

  ngOnInit() {}
}

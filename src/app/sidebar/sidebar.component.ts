import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonItem,
  IonLabel,
  IonMenu,
  IonItemDivider,
} from '@ionic/angular/standalone';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  standalone: true,
  imports: [CommonModule, IonToolbar, IonHeader, IonLabel, IonItem],
})
export class SidebarComponent implements OnInit {
  hoveredItem: string = '';
  menuItems = [
    { label: 'Dashboard' },
    { label: 'Profile' },
    { label: 'Settings' },
    { label: 'Logout' },
  ];
  constructor() {}

  ngOnInit() {}
}

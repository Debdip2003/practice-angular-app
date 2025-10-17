import { Component, OnInit } from '@angular/core';
import { IonSplitPane, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonList, IonButtons, IonMenuButton, IonLabel } from "@ionic/angular/standalone";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  imports: [IonLabel,  IonContent, IonTitle, IonToolbar, IonSplitPane, IonMenu, IonList, IonItem],
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

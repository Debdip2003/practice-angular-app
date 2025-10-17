import { Component, OnInit } from '@angular/core';
import { IonSplitPane, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonList } from "@ionic/angular/standalone";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  imports: [IonList, IonItem, IonContent, IonTitle, IonToolbar, IonHeader, IonSplitPane, IonMenu],
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

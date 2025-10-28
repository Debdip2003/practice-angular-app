import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonMenuToggle,
} from '@ionic/angular/standalone';
import { SidebarComponent } from './components/sidebar/sidebar.component';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [
    IonSplitPane,
    IonApp,
    IonRouterOutlet,
    SidebarComponent,
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
  ],
})
export class AppComponent {
  constructor() {}
}

import { Component } from '@angular/core';

import { SidebarComponent } from '../sidebar/sidebar.component';
import { IonSplitPane, IonContent, IonApp, IonMenu } from '@ionic/angular/standalone';
import { MainContentComponent } from '../main-content/main-content.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonApp, IonSplitPane, SidebarComponent, MainContentComponent, IonContent, IonMenu],
})
export class HomePage {
  constructor() {}
}

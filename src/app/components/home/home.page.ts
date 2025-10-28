import { Component } from '@angular/core';

import { IonContent } from '@ionic/angular/standalone';
import { MainContentComponent } from '../../main-content/main-content.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [MainContentComponent, IonContent],
})
export class HomePage {
  constructor() {}
}

import { Component, OnInit } from '@angular/core';
import {
  IonContent,
  IonIcon,
  IonButton,
  IonBackButton,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css'],
  imports: [IonBackButton, IonContent, IonButton, IonIcon],
})
export class MainContentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

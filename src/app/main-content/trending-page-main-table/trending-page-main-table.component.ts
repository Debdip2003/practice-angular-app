import { Component, OnInit } from '@angular/core';
import { IonLabel, IonContent, IonCard } from "@ionic/angular/standalone";

@Component({
  selector: 'app-trending-page-main-table',
  templateUrl: './trending-page-main-table.component.html',
  styleUrls: ['./trending-page-main-table.component.css'],
  imports: [IonCard, IonContent, IonLabel]
})
export class TrendingPageMainTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

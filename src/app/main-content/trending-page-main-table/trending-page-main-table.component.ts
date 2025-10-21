import { CommonModule } from '@angular/common';
import { Component, Injectable, OnInit } from '@angular/core';
import {
  IonLabel,
  IonContent,
  IonCard,
  IonButton,
} from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-trending-page-main-table',
  templateUrl: './trending-page-main-table.component.html',
  styleUrls: ['./trending-page-main-table.component.css'],
  imports: [IonCard, IonContent, CommonModule, HttpClientModule],
})

export class TrendingPageMainTableComponent implements OnInit {
  // stockNames = [
  //   {
  //     stockName: 'Tata Investment Corporation Ltd.',
  //     subLabel: 'Finance',
  //     ltp: 875.0,
  //     chg: '+70.00',
  //     chgPerc: '+8.71%',
  //   },
  //   {
  //     stockName: 'Ather Energy Ltd.',
  //     subLabel: 'Automobile & Ancillaries',
  //     ltp: 765.85,
  //     chg: '+43.65',
  //     chgPerc: '+6.04%',
  //   },
  // ];

  public stockNames: any;

  constructor(private http: HttpClient) {}
  public fetchDetails() {
    this.http
      .get(
        'https://staging.stockedge.com/Api/trendingstocksapi/GetPriceMovers?gainerLosersTypeEnum=1&page=1&pageSize=10&relevantListings=10&lang=ens'
      )
      .subscribe((data) => {
        console.log(data);
        this.stockNames = data;
      });
  }
  ngOnInit() {
    this.fetchDetails();
  }
}

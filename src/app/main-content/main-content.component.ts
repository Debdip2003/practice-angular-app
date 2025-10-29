import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { MainContentHeaderComponent } from './main-content-header/main-content-header.component';
import { MainContentFilterComponent } from './main-content-filter/main-content-filter.component';
import { TrendingPageMainTableComponent } from './trending-page-main-table/trending-page-main-table.component';
import { AuthServices } from '../services/auth-services';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css'],
  imports: [
    IonContent,
    CommonModule,
    MainContentHeaderComponent,
    MainContentFilterComponent,
    TrendingPageMainTableComponent,
  ],
})
export class MainContentComponent implements OnInit {
  private readonly myAuthService=inject(AuthServices)
  constructor() {}

  ngOnInit() {
    console.log(this.myAuthService.setData().email)
  }
}

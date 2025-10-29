import { Component, inject, OnInit } from '@angular/core';

import { IonContent } from '@ionic/angular/standalone';
import { MainContentComponent } from '../../main-content/main-content.component';
import { AuthServices } from 'src/app/services/auth-services';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [MainContentComponent, IonContent],
})
export class HomePage implements OnInit{
  private readonly myAuthService = inject(AuthServices)
  constructor() {
  }
  
  ngOnInit(): void {
    console.log(this.myAuthService.setData())
    
  }

}

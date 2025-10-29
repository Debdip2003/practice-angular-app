import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonContent, IonItem, IonIcon,  IonButton, IonModal, IonHeader, IonToolbar, IonButtons, IonTitle, IonInput } from "@ionic/angular/standalone";
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-crud-page',
  templateUrl: './crud-page.component.html',
  styleUrls: ['./crud-page.component.scss'],
  imports: [FormsModule, IonInput, IonButtons, IonToolbar, IonHeader, IonModal, IonButton, IonIcon, IonItem, IonContent,HttpClientModule],
})
export class CrudPageComponent implements OnInit{
crudValues:any
editingNumbe: number | null = null
editingName: string =''
constructor(private http:HttpClient){}

public fetchDetails(){
     this.http
      .get(
        'https://staging.stockedge.com/Api/trendingstocksapi/GetPriceMovers?gainerLosersTypeEnum=1&page=1&pageSize=10&relevantListings=10&lang=ens'
      )
      .subscribe((apiResponse) => {

      if(Array.isArray(apiResponse)){
      this.crudValues = apiResponse.map((item:any)=>item.Name)
        console.log(this.crudValues)
      }
      });

}

ngOnInit(): void {
  this.fetchDetails()
}

 @ViewChild(IonModal) modal!: IonModal;

 
  name!: string;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: CustomEvent<OverlayEventDetail>) {
    if (event.detail.role === 'confirm') {
      this.crudValues.push(this.name);
    }
  }



  deleteStocks(index:number){
    this.crudValues.splice(index,1)
  }
}


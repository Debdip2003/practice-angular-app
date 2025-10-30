import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonButton,
  IonIcon,
  IonInput,
  IonAlert,
} from '@ionic/angular/standalone';
import { CrudPageServices } from './crud-page-services';

@Component({
  selector: 'app-crud-page',
  templateUrl: './crud-page.component.html',
  styleUrls: ['./crud-page.component.scss'],
  imports: [
    IonAlert,
    IonIcon,
    FormsModule,
    IonButton,
    IonContent,
    FormsModule,
    IonInput,
  ],
})
export class CrudPageComponent implements OnInit {
  public alertButtons = [
    {
      text: 'No',
      cssClass: 'alert-button-cancel',
    },
    {
      text: 'Yes',
      handler: (index: number) => {
        this.myCrudPageService.onDelete(index);
      },
      cssClass: 'alert-button-confirm',
    },
  ];

  nameList: string[] = [];
  input: string = '';
  editIndex: number | null = null;
  newName: string[] = [];
  private readonly myCrudPageService = inject(CrudPageServices);
  $index: any;

  ngOnInit(): void {
    this.myCrudPageService.myNames$.subscribe((data) => (this.nameList = data));
  }

  onAdd() {
    if (this.input == '') return;
    if (this.editIndex !== null) {
      this.myCrudPageService.onEdit(this.editIndex, this.input);
      this.editIndex = null;
    } else {
      this.myCrudPageService.onAdd(this.input);
    }
    this.input = '';
  }

  onEdit(index: number) {
    this.editIndex = index;
    this.input = this.myCrudPageService.myNameList[index];
  }

  onDelete(index: number) {
    this.myCrudPageService.onDelete(index);
  }
}

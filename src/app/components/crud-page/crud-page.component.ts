import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonButton,
  IonIcon,
  IonInput,
} from '@ionic/angular/standalone';
import { CrudPageServices } from './crud-page-services';
import { AlertController, ModalController } from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-crud-page',
  templateUrl: './crud-page.component.html',
  styleUrls: ['./crud-page.component.scss'],
  imports: [IonIcon, FormsModule, IonButton, IonContent, FormsModule, IonInput],
  providers: [AlertController, ModalController],
})
export class CrudPageComponent implements OnInit {
  nameList: string[] = [];
  input: string = '';
  editIndex: number | null = null;
  newName: string[] = [];
  $index: any;

  public readonly myCrudPageService = inject(CrudPageServices);
  private alertController = inject(AlertController);
  private modalController = inject(ModalController);

  ngOnInit(): void {
    this.myCrudPageService.myNames$.subscribe((data) => (this.nameList = data));
  }

  //add function
  onAdd() {
    if (this.input == '') return;
    if (this.editIndex !== null) {
      this.myCrudPageService.onEdit(this.editIndex, this.input);
      this.editIndex = null;
    } else {
      if (this.myCrudPageService.myNameList.includes(this.input)) {
        this.myCrudPageService.duplicateValue = true;
      } else {
        this.myCrudPageService.duplicateValue = false;
        this.myCrudPageService.onAdd(this.input);
      }
    }
    this.input = '';
  }

  //edit functions
  async onEdit(index: number) {
    const originalItem = this.myCrudPageService.myNameList[index];
    const editModal = await this.modalController.create({
      component: ModalComponent,
      componentProps: {
        itemToEdit: originalItem,
      },
    });
    await editModal.present();
    const { role, data } = await editModal.onDidDismiss();

    if (role === 'confirm') {
      const updateName = data.trim();
      const isDuplicate = this.myCrudPageService.myNameList.includes(data);
      if (isDuplicate) {
        this.myCrudPageService.duplicateValue = true;
      } else {
        this.myCrudPageService.onEdit(index, updateName);
        this.myCrudPageService.duplicateValue = false;
      }
    }
  }

  //delete function
  async onDelete(index: number) {
    const delAlert = await this.alertController.create({
      header: 'Confirm delete',
      buttons: [
        {
          text: 'NO',
          role: 'cancle',
        },
        {
          text: 'Yes',
          role: 'confirm',
          handler: () => {
            this.myCrudPageService.onDelete(index);
          },
        },
      ],
      backdropDismiss: false,
    });
    await delAlert.present();
  }
}

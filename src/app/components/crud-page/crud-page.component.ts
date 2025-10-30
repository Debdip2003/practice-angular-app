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
  private readonly myCrudPageService = inject(CrudPageServices);
  $index: any;

  private alertController = inject(AlertController);
  private modalController = inject(ModalController);

  // constructor(
  //   private alertController: AlertController,
  //   private modalController: ModalController
  // ) {}

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

  async onEdit(index: number) {
    const editModal = await this.modalController.create({
      component: ModalComponent,
    });
    await editModal.present();
    const { role, data } = await editModal.onDidDismiss();
    console.log(data);

    if (role === 'confirm') {
      // this.editIndex = index;
      // this.input = this.myCrudPageService.myNameList[index];
      const updateName = data.trim();
      this.myCrudPageService.onEdit(index, updateName);
    }
  }

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

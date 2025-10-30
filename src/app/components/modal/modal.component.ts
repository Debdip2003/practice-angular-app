import { Component, inject, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonTitle,
  IonButton,
  IonItem,
  IonContent,
  IonInput,
} from '@ionic/angular/standalone';
import { ModalController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  imports: [
    IonInput,
    IonToolbar,
    IonContent,
    IonItem,
    IonButton,
    IonTitle,
    IonButtons,
    IonHeader,
    FormsModule,
  ],
  providers: [ModalController],
})
export class ModalComponent {
  name!: string;
  private modalController = inject(ModalController);

  cancel() {
    return this.modalController.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalController.dismiss(this.name, 'confirm');
  }
}

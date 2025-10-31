import { Component, inject, Input, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonButtons,
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
    IonButtons,
    IonHeader,
    FormsModule,
  ],
  providers: [ModalController],
})
export class ModalComponent implements OnInit {
  @Input() itemToEdit: any;
  private modalController = inject(ModalController);

  ngOnInit(): void {
    console.log(this.itemToEdit);
  }
  cancel() {
    return this.modalController.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalController.dismiss(this.itemToEdit, 'confirm');
  }
}

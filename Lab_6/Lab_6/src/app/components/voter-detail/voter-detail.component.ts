import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-voter-detail',
  templateUrl: './voter-detail.component.html',
  styleUrls: ['./voter-detail.component.scss'],
})
export class VoterDetailComponent {
  @Input() voter: any;

  constructor(private modalCtrl: ModalController) { }

  close() {
    this.modalCtrl.dismiss();
  }
}

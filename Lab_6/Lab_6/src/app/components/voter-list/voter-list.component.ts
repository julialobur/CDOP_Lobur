import { Component, OnInit } from '@angular/core';
import { VoterService } from '../../services/voter.service';
import { ModalController } from '@ionic/angular';
import { VoterDetailComponent } from '../voter-detail/voter-detail.component';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-voter-list',
  templateUrl: './voter-list.component.html',
  styleUrls: ['./voter-list.component.scss'],
})
export class VoterListComponent implements OnInit {
  voters: any[] = [];

  constructor(private voterService: VoterService,
    private modalCtrl: ModalController,
    private storage: Storage) { }

  ngOnInit() {
    this.voterService.getVoters().subscribe((response) => {
      this.voters = response.results;
    });
  }

  // метод для відкриття модального вікна з деталями виборця
  async openVoterDetail(voter: any) {
    const modal = await this.modalCtrl.create({
      component: VoterDetailComponent,
      componentProps: { voter }  // передаємо виборця в компонент детального перегляду
    });
    return await modal.present();
  }

  // метод для додавання виборця в фаворити
  async addToFavorites(voter: any) {
    let favorites = (await this.storage.get('favorites')) || [];
    if (!favorites.some((existingVoter: { email: any; }) => existingVoter.email === voter.email)) {
      favorites.push(voter);
      await this.storage.set('favorites', favorites);
    }
  }
}

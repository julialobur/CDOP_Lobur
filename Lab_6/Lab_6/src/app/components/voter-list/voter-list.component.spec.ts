import { Component, OnInit } from '@angular/core';
import { VoterService } from '../../services/voter.service';
import { ModalController } from '@ionic/angular';
import { VoterDetailComponent } from '../voter-detail/voter-detail.component';
import { Storage } from '@ionic/storage-angular';  // Імпорт для роботи зі Storage

@Component({
  selector: 'app-voter-list',
  templateUrl: './voter-list.component.html',
  styleUrls: ['./voter-list.component.scss'],
})
export class VoterListComponent implements OnInit {
  voters: any[] = [];

  constructor(private voterService: VoterService, private storage: Storage) { }

  ngOnInit() {
    this.voterService.getVoters().subscribe((response) => {
      this.voters = response.results;
    });
  }

  // Метод для додавання виборця в фаворити
  async addToFavorites(voter: any) {
    // Отримуємо існуючі фаворити з локального сховища
    let favorites = (await this.storage.get('favorites')) || [];

    // Перевірка на наявність дубліката (за email або іншою унікальною ознакою)
    if (!favorites.some((existingVoter: { email: any; }) => existingVoter.email === voter.email)) {
      // Якщо виборець не в фаворитах, додаємо його
      favorites.push(voter);
      await this.storage.set('favorites', favorites); // Оновлюємо список фаворитів у сховищі
    } else {
      console.log('Voter is already in favorites!');
    }
  }

  // Відкриття детальної інформації про виборця в модальному вікні
  openVoterDetail(voter: any) {
    console.log(voter); // Додаткові дії для відкриття модального вікна або навігації
  }
}

import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  favorites: any[] = [];

  constructor(private storage: Storage, private router: Router) { }

  ngOnInit() {
    this.loadFavorites();
  }

  async loadFavorites() {
    this.favorites = (await this.storage.get('favorites')) || [];
  }

  // метод для переходу назад на головну сторінку
  goBack() {
    this.router.navigate(['/voter-list']);
  }

  // метод для видалення елемента з фаворитів
  async removeFromFavorites(voter: any) {
    this.favorites = this.favorites.filter(f => f.email !== voter.email); // видаляємо виборця за унікальним email
    await this.storage.set('favorites', this.favorites); // оновлюємо фаворити у сховищі
  }
}

import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private storage: Storage,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Ініціалізація Storage, щоб зберігати дані
      this.storage.create().then(() => {
        console.log('Storage ready');
      });
    });
  }

  // Метод для навігації в список виборців
  goToVoterList() {
    this.router.navigate(['/voter-list']);
  }

  // Метод для навігації в список улюблених
  goToFavorites() {
    this.router.navigate(['/favorites']);
  }
}

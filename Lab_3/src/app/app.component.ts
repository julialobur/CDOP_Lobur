import { Component } from '@angular/core';
     
@Component({
    selector: 'my-app',
    template: `<h1>Лабораторна 3</h1>
                <label>Введіть катети:</label>
                 <input [(ngModel)]="katet1" placeholder="Перший катет" (input)="check()">
                 <input [(ngModel)]="katet2" placeholder="Другий катет" (input)="check()">
                 <button (click)="result()">Порахувати</button>
                 <h3>Гіпотенуза = {{hypotenuse}}</h3>
                 <h3>Площа = {{area}}</h3>
                 <p *ngIf="katet1isWrong">Перший катет має бути невід'ємним числом!</p>
                 <p *ngIf="katet2isWrong">Другий катет має бути невід'ємним числом!</p>`
})

export class AppComponent {
    katet1: number;
    katet2: number;
    hypotenuse: number;
    area: number;
    katet1isWrong: boolean = false;
    katet2isWrong: boolean = false;

    check() {
        this.katet1isWrong = this.katet1 < 0 || isNaN(this.katet1);
        this.katet2isWrong = this.katet2 < 0 || isNaN(this.katet2);
    }
    
    result() {
        if (!this.katet1isWrong && !this.katet2isWrong) {
            this.hypotenuse = Math.sqrt(Math.pow(this.katet1, 2) + Math.pow(this.katet2, 2));
            this.area = (this.katet1 * this.katet2) / 2;
        }
    }
}
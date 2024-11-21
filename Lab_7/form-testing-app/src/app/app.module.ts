import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Додайте FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent // Додайте компонент тут
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, // Якщо ви використовуєте Reactive Forms
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

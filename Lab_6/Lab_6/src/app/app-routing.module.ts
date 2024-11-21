import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoterListComponent } from './components/voter-list/voter-list.component';
import { FavoritesComponent } from './components/favorites/favorites.component';

const routes: Routes = [
  { path: '', redirectTo: '/voter-list', pathMatch: 'full' },
  { path: 'voter-list', component: VoterListComponent },
  { path: 'favorites', component: FavoritesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

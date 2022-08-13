import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaderboardComponent } from './features/leaderboard/leaderboard.component';
import { PlayerListComponent } from './features/player-list/player-list.component';

const routes: Routes = [
  {
    path: 'leaderboard',
    component: LeaderboardComponent,
  },
  {
    path: 'players',
    component: PlayerListComponent,
  },
  {
    path: '',
    redirectTo: '/leaderboard',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

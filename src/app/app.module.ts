import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {SharedModule} from "./shared/shared.module";
import {CoreModule} from "./core/core.module";
import {AppRoutingModule} from "./app-routing.module";
import { LeaderboardComponent } from './features/leaderboard/leaderboard.component';
import { PlayerListComponent } from './features/player-list/player-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LeaderboardComponent,
    PlayerListComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

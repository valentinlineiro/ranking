import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../../shared/model/player';
import { PlayerService } from '../../core/services/player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css'],
})
export class PlayerListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'active', 'created'];
  datasource$: Observable<Player[]>;

  constructor(playerService: PlayerService) {
    this.datasource$ = playerService.getPlayers();
  }

  ngOnInit(): void {}
}

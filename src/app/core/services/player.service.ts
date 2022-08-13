import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Player } from '../../shared/model/player';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  constructor() {}

  getPlayers(): Observable<Player[]> {
    return of([{ id: '1', name: 'Cretino', highScore: 10000 }]);
  }
}

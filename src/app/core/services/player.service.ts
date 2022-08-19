import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../../shared/model/player';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  constructor(private httpClient: HttpClient) {}

  getPlayers(): Observable<Player[]> {
    return this.httpClient.get<Player[]>(environment.api + '/player');
  }
}

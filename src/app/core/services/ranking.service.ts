import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { Score } from '../../shared/model/score';

const DATA: Score[] = [
  {
    player: 'Cretino',
    score: 1000,
    timestamp: new Date(),
  },
];

@Injectable({
  providedIn: 'root',
})
export class RankingService {
  private readonly _ranking$: Observable<Score[]>;

  constructor(private store: AngularFirestore) {
    this._ranking$ = new BehaviorSubject<Score[]>(DATA).asObservable();
  }

  get ranking$(): Observable<Score[]> {
    return this._ranking$;
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Score } from '../../shared/model/score';

const DATA: Score[] = [];

@Injectable({
  providedIn: 'root',
})
export class RankingService {
  private readonly _ranking$: Observable<Score[]>;

  constructor() {
    this._ranking$ = new BehaviorSubject<Score[]>(DATA).asObservable();
  }

  get ranking$(): Observable<Score[]> {
    return this._ranking$;
  }
}

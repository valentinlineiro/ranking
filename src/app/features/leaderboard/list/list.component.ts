import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Score } from '../../../shared/model/score';
import { RankingService } from '../../../core/services/ranking.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'points'];
  datasource$: Observable<Score[]>;

  constructor(rankingService: RankingService) {
    this.datasource$ = rankingService.ranking$;
  }

  ngOnInit(): void {}
}

import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Score} from "../../shared/model/score";
import {RankingService} from "../../core/services/ranking.service";

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'points'];
  datasource$: Observable<Score[]>;

  constructor(rankingService: RankingService) {
    this.datasource$ = rankingService.ranking$;
  }

  ngOnInit(): void {
  }

}

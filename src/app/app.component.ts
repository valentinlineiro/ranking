import {Component} from '@angular/core';
import {RankingService} from "./core/services/ranking.service";
import {Observable} from "rxjs";
import {Score} from "./shared/model/score";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayedColumns: string[] = ['position', 'name', 'points'];
  datasource$: Observable<Score[]>;

  constructor(rankingService: RankingService) {
    this.datasource$ = rankingService.ranking$;
  }

}

import { Component, OnInit } from '@angular/core';
import { GameOfLifeService } from 'src/app/services/game-of-life/game-of-life.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  gameObject;

  constructor(public golService: GameOfLifeService) { }

  ngOnInit() {
    this.golService.GenerateBoard(20);
    this.gameObject = this.golService.game;
  }

  setClass(alive:boolean) {
    return {
      'cell': true,
      'alive': alive
    }
  }

  onClick(i: number, j: number) {
    this.golService.toggleTile(i, j);

  }
}

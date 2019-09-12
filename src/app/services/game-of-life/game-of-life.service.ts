import { Injectable } from '@angular/core';
import { Game } from 'src/app/models/game';
import { timer, Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameOfLifeService {

  game: Game = new Game();
  stepTime: number = 1000;
  subscription: Subscription;
  isPlaying: boolean = false;

  constructor() { }

  public GenerateBoard(size: number) {

    this.gameStop();

    this.game.restart(size);
    console.log(this.game.board);

    this.gameStart();
  }

  public changeSpeed(speed: number) {
    this.gameStop();
    this.stepTime = speed;
    this.gameStart();
  }

  public gameStart() {
    this.isPlaying = true;
    this.subscription = timer(0, this.stepTime).
      subscribe(() => this.gameStep());
  }

  public gameStop() {
    this.isPlaying = false;
    if (this.subscription)
      this.subscription.unsubscribe();
  }

  public gameStep() {
    this.game.step();
    console.log(this.game.board);
  }

  public toggleTile(i: number, j: number) {
    this.game.setTile(i, j, !this.game.board[i][j]);
    console.log(this.game.board);
  }
}

import { Component, OnInit } from '@angular/core';
import { GameOfLifeService } from 'src/app/services/game-of-life/game-of-life.service';
import { faPlay, faPause, faStepForward, faRedo } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  faRedo = faRedo;
  faStepForward = faStepForward;

  constructor(private golService: GameOfLifeService) { }

  ngOnInit() {
  }

  isPlaying() {
    return this.golService.isPlaying;
  }

  playIcon() {
    if (this.isPlaying())
      return faPause;
    else
      return faPlay;
  }

  play() {
    if (this.golService.isPlaying)
      this.golService.gameStop();
    else
      this.golService.gameStart();
  }

  next() {
    this.golService.gameStop();
    this.golService.gameStep();
  }

  restart() {
    this.golService.GenerateBoard(20);
  }

  onSpeedChange(event) {
    this.golService.changeSpeed(event.target.value);
  }

  onSizeChange(event) {
    this.golService.GenerateBoard(event.target.value);
  }
}

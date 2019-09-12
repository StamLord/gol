import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-window',
  templateUrl: './info-window.component.html',
  styleUrls: ['./info-window.component.css']
})
export class InfoWindowComponent implements OnInit {

  info: string[] = [`
    <table>
    <tbody>
        <tr><td>Block</td><td><img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Game_of_life_block_with_border.svg/66px-Game_of_life_block_with_border.svg.png\"\></td></tr>
        <tr><td>Bee-hive</td><td><img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Game_of_life_beehive.svg/98px-Game_of_life_beehive.svg.png\"\></td></tr>
        <tr><td>Loaf</td><td><img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Game_of_life_loaf.svg/98px-Game_of_life_loaf.svg.png\"\></td></tr>
        <tr><td>Boat</td><td><img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Game_of_life_boat.svg/82px-Game_of_life_boat.svg.png\"\></td></tr>
        <tr><td>Tub</td><td><img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Game_of_life_flower.svg/82px-Game_of_life_flower.svg.png\"\></td></tr>
    </tbody>
    </table>
    `,
    `
    <table>
    <tbody>
        <tr><td>Blinker</td><td><img src=\"https://upload.wikimedia.org/wikipedia/commons/9/95/Game_of_life_blinker.gif\"\></td></tr>
        <tr><td>Toad</td><td><img src=\"https://upload.wikimedia.org/wikipedia/commons/1/12/Game_of_life_toad.gif\"\></td></tr>
        <tr><td>Beacon</td><td><img src=\"https://upload.wikimedia.org/wikipedia/commons/1/1c/Game_of_life_beacon.gif\"\></td></tr>
        <tr><td>Pulsar</td><td><img src=\"https://upload.wikimedia.org/wikipedia/commons/0/07/Game_of_life_pulsar.gif\"\></td></tr>
        <tr><td>Penta-decanthlon</td><td><img src=\"https://upload.wikimedia.org/wikipedia/commons/f/fb/I-Column.gif\"\></td></tr>
    </tbody>
    </table>
    `,
    `
    <table>
    <tbody>
        <tr><td>Glider</td><td><img src=\"https://upload.wikimedia.org/wikipedia/commons/f/f2/Game_of_life_animated_glider.gif\"\></td></tr>
        <tr><td>Light-Wight Spaceship</td><td><img src=\"https://upload.wikimedia.org/wikipedia/commons/3/37/Game_of_life_animated_LWSS.gif\"\></td></tr>
        <tr><td>Middle-Wight Spaceship</td><td><img src=\"https://upload.wikimedia.org/wikipedia/commons/4/4e/Animated_Mwss.gif\"\></td></tr>
        <tr><td>Heavy-Wight Spaceship</td><td><img src=\"https://upload.wikimedia.org/wikipedia/commons/4/4f/Animated_Hwss.gif\"\></td></tr>
    </tbody>
    </table>
    `
  ];
  index: number = 0;

  constructor() { }

  ngOnInit() {
  }

  changeIndex(newIndex: number) {
    this.index = newIndex;
  }


}

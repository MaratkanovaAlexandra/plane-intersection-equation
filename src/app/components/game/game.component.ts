import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  firstPlane = "A1x + B1y + C1z + D1 = 0";
  secondPlane = "A2x + B2y + C2z + D2 = 0";
  hints = 1;
  height = `${100/this.hints}%`;

  constructor() { }

  ngOnInit(): void {
  }

  getHint() {
    switch(this.hints) {
      case 1:
        this.hints += 0.5;
        break;
      case 1.5:
        this.hints += 1.5;
        break;
      case 3:
        this.hints = 0.;
        return;
    }
    this.height = `${100/this.hints}%`;
  }

}

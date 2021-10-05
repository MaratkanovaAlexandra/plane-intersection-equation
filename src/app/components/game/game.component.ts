import { Component, OnInit } from '@angular/core';
import { EquationService } from '../../services/equation.service'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  firstPlane: string;
  secondPlane: string;
  hints = 1;
  height = `${100/this.hints}%`;

  constructor(private equation: EquationService) {
    this.firstPlane = equation.getEquation();
    this.secondPlane = equation.getEquation();
  }

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

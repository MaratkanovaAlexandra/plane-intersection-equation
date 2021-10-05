import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquationService {

  constructor() { }

  getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
  }

  getFourRandomNumber():Number[] {
    return [this.getRandomInt(100), this.getRandomInt(100), this.getRandomInt(100), this.getRandomInt(100)]
  }

  getEquation():string {
    const NUMBERS = this.getFourRandomNumber();
    return `${NUMBERS[0]}x + ${NUMBERS[1]}y + ${NUMBERS[2]}z + ${NUMBERS[3]} = 0`
  }

  gaussMethod() {

  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tic-tac-toe';
  activeChoice = 1;
  countMoves = 0;
  winner = '';

  // 0 => [0] [1] [2]
  // 1 => [0] [1] [2] 
  // 2 => [0] [1] [2] 

  positions = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];

  myMove(line: any, index: any) {

    if (this.positions[line][index] === '') {
      this.countMoves++;

      this.positions[line][index] = String(this.activeChoice);

      if (this.countMoves > 4) {
        if (this.checkIsWin(line, index)) {
          this.winner = this.activeChoice === 1 ? 'O' : 'X';
        }
      }

      this.changeActiveChoice();
    }
  }

  changeActiveChoice() {
    this.activeChoice = this.activeChoice === 1 ? 5 : 1;
  }

  checkIsWin(line: any, index: any): boolean {
    // console.log({ line, index })

    if (this.checkCurrentLine(line)) {
      return true;
    } else if (this.checkCurrentColumn(index)) {
      return true;
    } else if (this.checkCurrentDiagonal(line, index)) {
      return true;
    }

    return false;
  }


  checkCurrentLine(line: any) {
    let soma = 0;

    this.positions[line].forEach(item => soma = soma + Number(item));

    return soma === 3 || soma === 15;
  }

  checkCurrentColumn(index: any) {
    let soma = 0;

    this.positions.forEach(line => soma = soma + Number(line[index]));

    return soma === 3 || soma === 15;
  }

  checkCurrentDiagonal(line: any, index: any) {
    let soma = 0;
    const size = this.positions.length;

    for (let i = 0; i < size; i++) {
      soma += Number(this.positions[i][i]);
    }

    if (soma === 3 || soma === 15) {
      return true;
    }

    soma = 0;

    for (let i = 0; i < size; i++) {
      soma += Number(this.positions[i][size - (i + 1)]);
    }

    if (soma === 3 || soma === 15) {
      return true;
    }

    return false;

  }


}

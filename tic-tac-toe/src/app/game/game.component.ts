import { Component, NgModule } from '@angular/core';

enum Player {
  None = "",
  One = "X",
  Two = "O"
}

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  currentPlayer: Player = Player.One;
  board: Player[][] = [
    [Player.None, Player.None, Player.None],
    [Player.None, Player.None, Player.None],
    [Player.None, Player.None, Player.None],
  ];

  makeMove(row: number, col: number) {
    if (this.board[row][col] === Player.None) {
      this.board[row][col] = this.currentPlayer;
      this.currentPlayer = this.currentPlayer === Player.One ? Player.Two : Player.One;
    }
  }
}

@NgModule({
  declarations: [GameComponent],
  exports: [GameComponent]
})
export class GameModule { }

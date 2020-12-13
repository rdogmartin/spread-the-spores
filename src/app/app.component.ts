import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public cell1CssClass = 'empty';
  public cell2CssClass = 'empty';
  public cell3CssClass = 'empty';
  public cell4CssClass = 'empty';
  public cell5CssClass = 'empty';
  public cell6CssClass = 'empty';
  public cell7CssClass = 'empty';
  public cell8CssClass = 'empty';
  public cell9CssClass = 'empty';
  public lastClickedCSSClass = 'player1';

  public cell1Clicked() {
    this.onCellClicked('cell1');
  }

  public cell2Clicked() {
    this.onCellClicked('cell2');
  }
  public cell3Clicked() {
    this.onCellClicked('cell3');

  }
  public cell4Clicked() {
    this.onCellClicked('cell4');

  }
  public cell5Clicked() {
    this.onCellClicked('cell5');

  }
  public cell6Clicked() {
    this.onCellClicked('cell6');

  }
  public cell7Clicked() {
    this.onCellClicked('cell7');

  }
  public cell8Clicked() {
    this.onCellClicked('cell8');

  }
  public cell9Clicked() {
    this.onCellClicked('cell9');

  }

  private onCellClicked(cellName: string) {
    let isMoveValid: boolean;
    switch (cellName) {
      case 'cell1':
        isMoveValid = this.allowMove(this.cell1CssClass);
        if (isMoveValid) {
          this.cell1CssClass = this.lastClickedCSSClass;
        } else {
          alert('Move not allowed');
        }
        break;
      case 'cell2':
        isMoveValid = this.allowMove(this.cell2CssClass);
        if (isMoveValid) {
          this.cell2CssClass = this.lastClickedCSSClass;
        } else {
          alert('Move not allowed');
        }
        break;
      case 'cell3':
        isMoveValid = this.allowMove(this.cell3CssClass);
        if (isMoveValid) {
          this.cell3CssClass = this.lastClickedCSSClass;
        } else {
          alert('Move not allowed');
        }
        break;
      case 'cell4':
        isMoveValid = this.allowMove(this.cell4CssClass);
        if (isMoveValid) {
          this.cell4CssClass = this.lastClickedCSSClass;
        } else {
          alert('Move not allowed');
        }
        break;
      case 'cell5':
        isMoveValid = this.allowMove(this.cell5CssClass);
        if (isMoveValid) {
          this.cell5CssClass = this.lastClickedCSSClass;
        } else {
          alert('Move not allowed');
        }
        break;
      case 'cell6':
        isMoveValid = this.allowMove(this.cell6CssClass);
        if (isMoveValid) {
          this.cell6CssClass = this.lastClickedCSSClass;
        } else {
          alert('Move not allowed');
        }
        break;
      case 'cell7':
        isMoveValid = this.allowMove(this.cell7CssClass);
        if (isMoveValid) {
          this.cell7CssClass = this.lastClickedCSSClass;
        } else {
          alert('Move not allowed');
        }
        break;
      case 'cell8':
        isMoveValid = this.allowMove(this.cell8CssClass);
        if (isMoveValid) {
          this.cell8CssClass = this.lastClickedCSSClass;
        } else {
          alert('Move not allowed');
        }
        break;
      case 'cell9':
        isMoveValid = this.allowMove(this.cell9CssClass);
        if (isMoveValid) {
          this.cell9CssClass = this.lastClickedCSSClass;
        } else {
          alert('Move not allowed');
        }
        break;
    }

    if (isMoveValid) {
      if (this.lastClickedCSSClass === 'player1') {
        this.lastClickedCSSClass = 'player2';
      } else {
        this.lastClickedCSSClass = 'player1';
      }
    }
  }

  private allowMove(cellCssClass: string): boolean {
    if (cellCssClass !== 'empty') {
      return false;
    }
    return true;
  }

}
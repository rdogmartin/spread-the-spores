import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public cell1CssClass = 'empty';

  public cell1Clicked() {
    this.cell1CssClass = 'player1';
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //countVal!: number;
  evenNumbers: number[] = [];
  oddNumbers: number[] = [];
  title = 'game-control';
  getCurrentCount(count: number) {
    if (count % 2 == 0) this.evenNumbers.push(count);
    else this.oddNumbers.push(count);
  }
}

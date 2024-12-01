import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  countVal!: number;
  title = 'game-control';
  getCurrentCount(count: number) {
    this.countVal = count;
  }
}

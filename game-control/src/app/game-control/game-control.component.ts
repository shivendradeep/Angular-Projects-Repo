import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  intervalId!: ReturnType<typeof setInterval>;;  // Ensure it's a number type (in browser environments)
  currentCount: number = 0;
  @Output() emitCurrentCount = new EventEmitter<number>();  // Define EventEmitter type

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    console.log(`Previous count: ${this.currentCount}`);

    // Set the interval to emit the updated count every second
    this.intervalId = setInterval(() => {
      this.emitCurrentCount.emit(this.currentCount++);  // Increment and emit count
    }, 1000);

    console.log(`Updated count (before next increment): ${this.currentCount}`);
  }

  onStopGame() {
    // Stop the interval when the game is stopped
    clearInterval(this.intervalId);
    console.log('Game stopped');
  }
}

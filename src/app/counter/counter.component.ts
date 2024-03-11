import { Component } from '@angular/core';

@Component({
  selector: 'mi-counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public counter: number = 0;

  increase(): void {
    this.counter++;
  }
  decrease(): void {
    this.counter--;
  }
  reset(): void {
    this.counter = 0;
  }
}

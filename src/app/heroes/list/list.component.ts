import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroesList: string[] = ['Iron Man', 'Thor', 'Black Widow', 'Hulk'];
  public deletedHero: string|undefined = undefined;

  deleteLastHero(): void {
    this.deletedHero = this.heroesList.pop();
  }

  reset(): void {
  this.heroesList = ['Iron Man', 'Thor', 'Black Widow', 'Hulk'];
  this.deletedHero = undefined;
  }
}

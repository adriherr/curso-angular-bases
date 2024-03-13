import { Component } from '@angular/core';
import { Character } from './../../interfaces/character.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  constructor(private dbzService: DbzService) {}

  get characterListTitle(): string {
    return this.dbzService.characterListTitle;
  }
  get characters(): Character[] {
    return this.dbzService.characters;
    // return [...this.dbzService.characters];
  }

  deleteCharacter(id: string): void {
    this.dbzService.onDeleteCharacter(id);
  }

  addNewCharacter(character: Character): void {
    this.dbzService.onAddCharacter(character);
  }
}

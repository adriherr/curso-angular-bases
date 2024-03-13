import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from './../../interfaces/character.interface';

@Component({
  selector: 'add-dbz-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public newCharacter: Character = {
    name: '',
    power: 0
  };

  emitCharacter(): void {
    if (this.newCharacter.name.length === 0) return;
    this.onNewCharacter.emit(this.newCharacter);
    this.newCharacter = { name: '', power: 0 }
  }
}

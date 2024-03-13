import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';



@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public characterListTitle: string = 'Personajes';
  public characters: Character[] = [{
    id: uuid(),
    name: 'Personaje Ejemplo',
    power: 10000
  }];
  onAddCharacter(character: Character): void {
    this.characters.push({ id: uuid(), ...character });
  }
  onDeleteCharacter(charId: string): void {
    const characterToDelete = this.characters.find((char) => char.id === charId) || { name: '', power: 0 };
    const charIndex = this.characters.indexOf(characterToDelete);
    if (charIndex !== -1) this.characters.splice(charIndex, 1);
  }
}

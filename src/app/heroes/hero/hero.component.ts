import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'empty_hero';
  public age: number = 0;
  public showChangeHero: boolean = true;
  public showChangeAge: boolean = true;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }
  get heroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'Spiderman';
    this.showChangeHero = false;
  }
  changeAge(): void {
    this.age = 69;
    this.showChangeAge = false;
  }
  resetForm(): void {
    this.name = 'empty_hero';
    this.age = 0;
    this.showChangeHero = true;
    this.showChangeAge = true;
  }
}

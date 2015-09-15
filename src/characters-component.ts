import {Component, NgFor, NgIf, View} from 'angular2/angular2';
import {Router} from 'angular2/router';
import {CharacterService} from './character-service';
import {Character} from './character';

@Component({ selector: 'my-characters' })
@View({
  template: `
    <h2>Characters</h2>
    <ul class="characters">
      <li *ng-for="#character of characters" (click)="onSelect(character)">
        <span class="badge">{{character.id}}</span> {{character.name}}</a>
      </li>
    </ul>
    <h2 *ng-if="currentCharacter">
      {{currentCharacter.name | uppercase}} is my character
    </h2>
  `,
  directives: [NgFor, NgIf],
  styles: [`
    .characters {list-style-type: none; margin-left: 1em; padding: 0; width: 14em;}
    .characters li { cursor: pointer; }
    .characters li:hover {color: #369; background-color: #EEE; }
  `]
})
export class CharactersComponent {
  private _characters: Character[];
  public currentCharacter: Character;

  constructor(private _characterService: CharacterService, private _router: Router) { }

  get characters() {
    if (this._characters) { return this._characters; }

    this._characterService.getCharacters()
      .then(characters => this._characters = characters);

    return this._characters;
  }

  onSelect(character: Character) { this.currentCharacter = character; }
}

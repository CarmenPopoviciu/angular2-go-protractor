import {Character} from './character';

export class CharacterService {
	getCharacters() { return Promise.resolve(CHARACTERS); }

	getCharacter(id: number) {
		return Promise.resolve(CHARACTERS)
			.then((characters) => { return characters.filter((c) => {
				return c.id === id;
			})[0]});
	}
}

var CHARACTERS : Character[] = [
	{
		"id": 11,
		"name": "Aragorn"
	},
	{
		"id": 12,
		"name": "Meriadoc Brandybuck"
	},
	{
		"id": 13,
		"name": "Pippin Took"
	},
	{
		"id": 14,
		"name": "Frodo Baggins"
	},
	{
		"id": 15,
		"name": "Samwise Gamgee"
	},
	{
		"id": 16,
		"name": "Gandalf"
	},
	{
		"id": 17,
		"name": "Boromir"
	},
	{
		"id": 18,
		"name": "Gimli"
	},
	{
		"id": 19,
		"name": "Legolas"
	},
	{
		"id": 20,
		"name": "Elrond"
	}
];

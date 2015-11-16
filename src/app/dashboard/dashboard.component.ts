import {Component, FORM_DIRECTIVES} from 'angular2/angular2';

@Component({
  selector: 'my-dashboard',
	template: `
		<h2>Dashboard</h2>
		<div>Yo {{name}}</div>
		<input [(ng-model)]="name" />
		<button (click)="sayHello()">Say Hello</button>
		<p>{{message}}</p>
	`,
	directives: [FORM_DIRECTIVES]
})
export class DashboardComponent {
	public name = 'John';
	public message = '';

	sayHello() {
		this.message = 'Yo ' + this.name + '!';
	}
}

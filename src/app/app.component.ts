import {Component} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {CharactersComponent} from './characters/characters.component';
import {CalculatorComponent} from './silly-calculator/calculator.component';

@Component({
  selector: 'my-app',
  template: `
    <a [router-link]="['./Dashboard']">Dashboard</a> |
    <a [router-link]="['./Characters']">Characters</a> |
    <a [router-link]="['./Calculator']">Silly calculator</a>
    <router-outlet></router-outlet>
    `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/dashboard', as: 'Dashboard', component: DashboardComponent },
  { path: '/characters', as: 'Characters', component: CharactersComponent },
  { path: '/calculator', as: 'Calculator', component: CalculatorComponent }
])
export class AppComponent { }

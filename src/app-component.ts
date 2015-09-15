import {View, Component} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {CharactersComponent} from './characters-component';
import {DashboardComponent} from './dashboard-component';

@Component({ selector: 'my-app' })
@View({
  template: `
    <a [router-link]="['./dashboard']">Dashboard</a>
    <a [router-link]="['./characters']">Characters</a>
    <router-outlet></router-outlet>
    `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', as: 'dashboard', component: DashboardComponent },
  { path: '/characters', as: 'characters', component: CharactersComponent }
])
export class AppComponent { }

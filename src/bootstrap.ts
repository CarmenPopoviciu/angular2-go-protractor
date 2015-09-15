import {bootstrap} from 'angular2/angular2';
import {ROUTER_BINDINGS} from 'angular2/router';
import {CharacterService} from './character-service';
import {AppComponent} from './app-component';

bootstrap(AppComponent, [ROUTER_BINDINGS, CharacterService]);

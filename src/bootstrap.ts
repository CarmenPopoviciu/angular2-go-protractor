import {bind, bootstrap} from 'angular2/angular2';
import {ROUTER_BINDINGS, HashLocationStrategy, LocationStrategy} from 'angular2/router';
import {CharacterService} from './character-service';
import {AppComponent} from './app-component';

bootstrap(AppComponent, [
	ROUTER_BINDINGS,
	CharacterService,
	bind(LocationStrategy).toClass(HashLocationStrategy)
]);

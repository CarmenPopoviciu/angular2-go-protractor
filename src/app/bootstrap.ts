import {provide, bootstrap} from 'angular2/angular2';
import {ROUTER_PROVIDERS, HashLocationStrategy, LocationStrategy} from 'angular2/router';

import {AppComponent} from './app.component';
import {CharacterService} from './characters/character.service';

bootstrap(AppComponent, [
	ROUTER_PROVIDERS,
	CharacterService,
	provide(LocationStrategy, {useClass: HashLocationStrategy})
]);

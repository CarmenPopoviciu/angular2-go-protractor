#Angular 2 Go with Protractor !

Simple starter example that gets you going with Angular 2 and Protractor in minutes, based on the
[angular2-go seed](https://github.com/johnpapa/angular2-go) by John Papa.

## Quick note about dependencies

This seed uses a Protractor version >= v3.0.0. Starting with v3.0.0 Protractor no longer supports node versions < v4.2
(see [changelog](https://github.com/angular/protractor/blob/master/CHANGELOG.md#300)), so make sure you're using a
compatible node version.

## Run the application

1. Run `npm install`

1. Run the TypeScript compiler and watch for changes `npm run dev`

1. Open 2nd terminal and launch the app in the browser `npm start`

## Run the e2e tests

1. Ensure the application is running (`npm start`)

1. Open a third terminal and run the tests `npm run e2e`

The tests are run directly against Chrome, so no need to fire up a Selenium Standalone Server instance. Check
protractor.conf.js for comments about ng2-specific configuration.

Keep in mind that currently not all locator strategies are supported for ng2 apps. Things like by.model() or by.binding()
are not working just yet. Check the Protractor [changelog](https://github.com/angular/protractor/blob/master/CHANGELOG.md)
for new releases

##Notes

This sample intentionally uses precise versions of Angular 2 and SystemJS so new versions do not break it. I will update these as Angular 2 moves out of Alpha.

This uses the Path Routing Strategy (HTML5 Mode in Angular 1). This is ideal, however since this demo strives for a simple server using live-server, if you refresh the browser when on a deep link (a named route), you will get a 404. Simply go back to the root /.

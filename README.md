#Angular 2 Go !

[![Join the chat at https://gitter.im/johnpapa/angular2-go](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/johnpapa/angular2-go?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Simple starter example that gets you going with Angular 2 in minutes.

##Pre-Requisites

1. Must install pre-requisites

	```bash
	npm install typescript live-server -g
	```

##Getting Started

1. Clone this repo

1. Run `npm install`

1. Run the TypeScript compiler and watch for changes `npm run tsc`

1. Open 2nd terminal and launch the app in the browser `npm start`

## Running Node and NPM

- [on Windows](http://www.johnpapa.net/tips-for-running-node-and-npm-on-windows/)
- [on OSX](http://www.johnpapa.net/how-to-use-npm-global-without-sudo-on-osx/)

##Notes

This sample intentionally uses precise versions of Angular 2 and SystemJS so new versions do not break it. I will update these as Angular 2 moves out of Alpha.

This uses the Path Routing Strategy (HTML5 Mode in Angular 1). This is ideal, however since this demo strives for a simple server using live-server, if you refresh the browser when on a deep link )a named route), you will get a 404. Simply go back to the root /.

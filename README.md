#Angular 2 Go !

Simple starter example that gets you going with Angular 2 in minutes.

Note: Non NPM instructions are [here](#Alternative-Non-NPM-Steps)

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

##Notes

This sample intentionally uses precise versions of Angular 2 and SystemJS so new versions do not break it. I will update these as Angular 2 moves out of Alpha.

This uses the Path Routing Strategy (HTML5 Mode in Angular 1). This is ideal, however since this demo strives for a simple server using live-server, if you refresh the browser when on a deep link )a named route), you will get a 404. Simply go back to the root /.


##Alternative Non-NPM Steps

Since the node_modules are all local already

1. Clone this repo

1. Change the scripts to point to the local tsc and live-server in `package.json`

```
  "scripts": {
    "tsc": "./node_modules/.bin/tsc -p src -w",
    "start": "./node_modules/.bin/live-server"
  }
```

1. Run the TypeScript compiler and watch for changes `npm run tsc`

1. Open 2nd terminal and launch the app in the browser `npm start`

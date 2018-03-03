# Typescript, Express, React, Node Stack

## Objective

I wanted a common language stack - or as near as I could get. I've previously been an enthusiast of the MEAN stack. I wanted to move to typescript to get its advantage.
I considered Angular 2 which I have used, but fancied trying React which looks a little cleaner.

This project started out as the template generated by Visual Studio 2017 for an Express.js application and orginally used PUG (previously JADE) as the render engine.
I coverted it to use React rendered on the server and mounted on the client.

Here's what I've got so far.

* Typescript throughout (except where HTML is required of course).
* React (tsx files) on front end and server.
* Pass throgh values from server to client (there's probably a better way to do this than my implementation)
* Custom render engine.
* Bootstrap 4.
* Build notifier for webpack.
* Configured webpack to bundle javascript based on server side rendered page.
* Respository factory pattern.
* Added Cucumberjs with tests run by Grunt.

## TODO

There's lot's more I want to do. Here's a list.

* ~~Change name to TERN stack.~~
* ~~Publish on GitHub.~~
* Host on AWS.
* Add business layer.
* ~~Add unit tests framework~~
* Add UI tests framework
* Add ORM (use TypeORM).
* Try using styles either specific to component or site wide or both.
* User React router instead of Express router.
* ~~Refactor into server client side code.~~
* Best practice error handling in REST calls
* Intellisense code completion for bootstrap.
* ~~Understand package.json scripts start (I don't think this is quite correct or properly used).~~
* Live updating so I don't need to restart Visual Studio on every change.
* Migrate to WebStorm (for comparison of IDE experiences).
* Migrate to VSCode (for comparison of IDE experiences).
* ~~Client side REST client.~~
* ~~Server side REST API.~~
* ~~Event binding on client.~~
* (May be) Might be nice to use PUG instead of HTML in React components
* ~~Tidy directory structure (do I need dist anymore).~~
* How should project be deployed?

## NOTES:
Evntually figured out that VS uses it's own compiler so Webpack should be used simply to package everything up into bundle.js
Webpack only used for bundling .js files and generating source map (Build uses Visual Studio typescript compiler).
Installed WebPackTest Runner extension (https://marketplace.visualstudio.com/items?itemName=MadsKristensen.WebPackTaskRunner)
Uses AXIOS for client side Rest calls.

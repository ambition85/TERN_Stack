# Typescript, Express, React, Node Stack

## Quick Start: No Database

It's easy with Docker, from the root of the project, just create your docker image
```
dockerBuild.sh
``` 
Then run it like this
```
dockerRun.sh
```
Then simply open your browser and go to...
```
localhost:3000
```
if you make code changes, leave the container running and rebuild and restart in the container using...
```
dockerRebuild.sh
```
Soon I'll intergrate dockerBuild and dockerRebuild by determing whether the image is already running.
I'll also trigger the build on a file save.

## Quick Start: Database with Docker Compose

I now have a first cut of sequalizer integrated that builds and seeds and Postgres Database running in a container.
To make it easy to use the following command...
```
docker-compose up
```
For more details of what's going on look at these parts of the project...
* /Web/database
* /Web/dockerEntryPoint.sh

## Quick Try: No Database

Go here http://tern.maestrodataservices.uk

## Docker Image

Available here https://cloud.docker.com/u/marcochristoforou/repository/docker/marcochristoforou/tern

## Visual Studio

I originally used Visual Studio to build and run this, hence the exitence of an sln file.

## Objective

I wanted a common language stack - or as near as I could get. I've previously been an enthusiast of the MEAN stack. I wanted to move to typescript to get its advantage.
I considered Angular 2 which I have used, but fancied trying React which looks a little cleaner.

This project started out as the template generated by Visual Studio 2017 for an Express.js application and orginally used PUG (previously JADE) as the render engine.
I converted it to use React rendered on the server and mounted on the client.

Here's what I've got so far.
* Typescript throughout (except where HTML is required of course).
* React (tsx files) on front end and server.
* Pass through values from server to client (there's probably a better way to do this than my implementation)
* Custom render engine.
* Bootstrap 4.
* Webpack extension.
* Build notifier for webpack.
* Installed Markdown Editor.
* Configured webpack to bundle javascript based on server side rendered page.
* Respository factory pattern.
* Added Cucumberjs with tests run by Grunt.
* Support for Postgres Database with Sequalize.

## TODO

There's lot's more I want to do. Here's a list.

* ~~Add ORM (use TypeORM or sequelize.org).~~
* Smaller docker image for runtime. (Exclude ts files and not required node packages)
* Jenkins - Add Unit test and UI test steps and deployment step.
* Jenkins - Triggger pipeline on checkin
* Jenkins - integrate with slack
* ~~Change name to TERN stack.~~
* ~~Publish on GitHub.~~
* More tidying (remove user from front end on client remove button).
* Switch to production REACT for deploy to cloud.
* Deploy best practice (exclude TS files).
* Automated builds and deploy.
* Deploy to Azure.
* ~~Add business layer.~~
* ~~Add unit tests framework~~
* Add UI tests framework.
* Try using styles either specific to component or site wide or both.
* User React router instead of Express router.
* ~~Refactor into server client side code.~~
* Best practice error handling in REST calls
* Intellisense code completion for bootstrap.
* ~~Understand package.json scripts start (I don't think this is quite correct or properly used).~~
* ~~Live updating so I don't need to restart Visual Studio on every change.~~
* ~~Migrate to VSCode (for comparison of IDE experiences).~~
* ~~Client side REST client.~~
* ~~Server side REST API.~~
* ~~Event binding on client.~~
* (May be) Might be nice to use PUG instead of HTML in React components
* ~~Tidy directory structure (do I need dist anymore).~~

## NOTES:
Eventually figured out that VS uses it's own compiler so Webpack should be used simply to package everything up into bundle.js
Webpack only used for bundling .js files and generating source map (Build uses Visual Studio typescript compiler).
Installed WebPackTest Runner extension (https://marketplace.visualstudio.com/items?itemName=MadsKristensen.WebPackTaskRunner)
Uses AXIOS for client side Rest calls.
TS files with tests much have 'Mocha' in TestFramework file property in Visual Studio.

## Jenkinsfile Requirements
The Jenkinsfile here was originally set up for a Windows server. It's quite useful because it shows the steps needed to build the app. However I am now favouring docker for hosting so I have done no more work on this, so just install docker on the Jenkins server.

## Manual
If you want to do it without docker just execute each line in the dockerfile directly in you OS (assuming it's a Linux based OS).

## References
Mocha TypeScript: https://www.npmjs.com/package/mocha-typescript

## Sequalizer

From inside the database directory

npx sequelize-cli db:create

npx sequelize-cli db:migrate

npx sequelize-cli db:seed:all

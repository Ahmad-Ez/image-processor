# Image Processor API

## Table of Contents

* [Description](#Descritpion)
* [Scripts](#Scripts)
* [Usage](#Usage)
* [Dependencies](#Dependencies)

## Description

This is a training project as a part of Udacity's Advanced Fullstack Web Development NanoDegree program 2022-2023.
It is about creating a REST API to resize requested images. This is to be achieved utilizing NodeJS, Typescript, npm-Sharp module. The project includes unit tests using jasmine.
There was no starter code to begin with, the project was created from scratch.

## Scripts
    This section follow a three-column structure:
    "npm run command": "equivalent to", description

  * "build": "npx tsc", this builds the JS in the ./dist folder
    "jasmine": "jasmine", runs jasmine unit tests
  * "test": "npm run build && npm run jasmine", builds the project first, then run jasmine unit tests
  * "start": "nodemon src/index.ts", runs the index.ts in the ./src folder
    "lint": "eslint 'src/**/*.ts'", check the development code using lint 
    "lint:fix": "eslint --fix 'src/**/*.ts'", check and fix the code using lint
    "prettier": "prettier --config .prettierrc --write src/**/*.ts ", runs prettier for code formatting
    "checkrules": "npx eslint-config-prettier", checks for conflicting rules between lint and prettier.


## Usage
To use the resizer API, the user needs to spin the server. This can be achieved by one of two methods:
- from the src/index.ts file, by running "npm run start" in the command line while in the project root dir.
- from the dist/index.js file, by running "npm run build" in the command line while in the project root dir, 
then run "node dist/index.js"

Then the server API can be accessed via the "/resize" endpoint follwed by the image name and required parameters, 
like this example: "http://localhost:3000/resize?filename=fjord.jpg&width=200&height=200"

The original files (to be resized) should be present in the ./images/full folder
The resized/cached images are then created in the ./images/cached folder. 
The files stays and if requested again is returned from the cache

The requested resized image is then returned to the user and displayed on the browser.


## Dependencies

All the project dependencies / dev dependencies are listed in the package.json file.
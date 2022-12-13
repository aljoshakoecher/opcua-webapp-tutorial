<p align="center">
    <img height="100px" src="https://github.com/aljoshakoecher/opcua-webapp-tutorial/blob/documentation/images/images/opc-ua-icon.png?raw=true">
	<img height="100px" src="https://github.com/aljoshakoecher/opcua-webapp-tutorial/blob/documentation/images/images/angular-icon.png?raw=true">
	<img height="100px" src="https://github.com/aljoshakoecher/opcua-webapp-tutorial/blob/documentation/images/images/nestjs-icon.png?raw=true">
</p>
<h1 align="center">
	Developing a Web App for Machine Communication via OPC UA
	<br>
	-- A Hands-on Tutorial --
</h1>


## Goals
- You learn the basics of modern web development with two major frameworks: 
  - [Angular](https://angular.io/) in the frontend and 
  - [NestJS](https://nestjs.com/) in the backend
- You learn the basics of modern industrial machine communication using [OPC UA](https://opcfoundation.org/about/opc-technologies/opc-ua/)

Afterwards, you should be able to extend the frontend according to your own requirements by adding Angular modules, components, routes, etc.
And you should also be able to extend the backend by adding modules with additional controllers, services etc.


## Requirements
- VS Code or similar IDE of your choice
- Git. Download from https://git-scm.com/downloads and install.
- An additional git GUI. While this is technically optional, I always recommend a GUI client, especially for Git beginners. I like SourceTree, but feel free to use anything from [this list](https://git-scm.com/downloads/guis). Alternatively, you can also install some extensions to VS code (GitGraph, ...) and make VS code your Git GUI.
- Node.js installed. Download from https://nodejs.org/en/ and install.
- Basic knowledge of (object-oriented) programming in general (terms like "class", "method", ... and concepts such as if-statements, loops)
- Basic knowledge of HTTP messaging (request & response, HTTP methods, ...). Something like [this](https://www.freecodecamp.org/news/http-and-everything-you-need-to-know-about-it/) or [this](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview) should suffice.

- Optional: Basic understanding of Angular and NestJS. This is optional, but it will be much easier for you to follow along if you don't hear all these concepts for the first time. 

## Lessons

### Lesson 1: Overall Setup and First Steps to an Angular App
- Overview on the overall architecture
- A quick note to TypeScript and Node.js / npm
- Asynchronous behavior: callback hell and how to get to observable heaven
- Project setup 
- Angular basics:
  - HTML component templates
  - TypeScript component logic
  - CSS component style

### Lesson 2: Angular 101, Custom Components and Routing
- Angular building blocks: modules, components, services
- A custom component 
- A custom module with routing

### Lesson 3: Adding a Backend and a First Look at OPC UA
- A quick note on HTTP basics 
- NestJS building blocks: modules, controllers, services
- A custom controller and service

### Lesson 4: Intro to OPC UA
- OPC UA basics
- OPC UA with TypeScript: node-opc-ua basics
- Integration of node-opc-ua into the backend

### Lesson 5: Reading OPC UA variables
- Frontend logic
- Backend logic

### Additional Lessons?
Topics could include:
- Subscribing to value changes
- Writing values
- Browsing nodes
- Executing methods
- Connecting with authentication and security
- Creating an opc ua server


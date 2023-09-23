# uppercaseband-vue3-vitest

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/markdeleon01/uppercaseband-vue3-vitest/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/markdeleon01/uppercaseband-vue3-vitest/tree/main)

![Statements](#statements#)
![Branches](#branches#)
![Functions](#functions#)
![Lines](#lines#)

## UPPERCASE band webapp

As a matter of interest and passion for JavaScript and music in general, I created a Vue3 web application for my band UPPERCASE.

The live site can be found on: https://uppercaseband.onrender.com/

## Project setup

1.  Install NodeJS on your local machine
2.  Clone this project repository
3.  Navigate to the project folder and install

```sh
npm install
```

4.  Install JSON Server to simulate a backend REST service to deliver data in JSON format to the front-end application

```
npm install -g json-server
```

5.  JSON Server will use the _db.json_ file in the project folder to serve mock data as defined in the file
6.  Run the mock API server

```
json-server --watch db.json
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

The front-end application runs on: http://localhost:5173/

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

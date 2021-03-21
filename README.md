# ![adonis icon](https://user-images.githubusercontent.com/25934051/82269493-44409680-9948-11ea-864f-26443e69da41.png) AdonisJS with Vue.Js

This is an example of an web application made with [AdonisJS](https://adonisjs.com/) in Typescript with integrated frontend in [Vue.js](https://vuejs.org/) using [Yarn monorepo](https://classic.yarnpkg.com/en/docs/workspaces).
It is used [version 5](https://preview.adonisjs.com/) of AdonisJS and [Vue.Js in Typescript](https://vuejs.org/v2/guide/typescript.html#ad).

Provides a [Web API](https://en.wikipedia.org/wiki/Web_API) and a [SPA](https://en.wikipedia.org/wiki/Single-page_application) with autentication.

Based on [Adonis Blog Demo](https://github.com/maugusto-jpm/adonis-ts-blog)

![home preview](https://user-images.githubusercontent.com/25934051/83518671-1b281600-a4b1-11ea-96fe-b3212c30c0f1.png)

It is configured with:

- [SQLite](https://www.sqlite.org/index.html) (for development and tests)
- [AdonisJS Shield](https://preview.adonisjs.com/releases/shield/version-2) to protect from common web attacks
- [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) as code formatters to backend and frontend
- [Axios](https://github.com/axios/axios) as HTTP client for browser
- [Vue Router](https://router.vuejs.org/) for [SPA](https://en.wikipedia.org/wiki/Single-page_application) navigation
- [Vuex](https://vuex.vuejs.org/) state management pattern
- [Vuex Persist](https://github.com/championswimmer/vuex-persist) to local data storage

## 📝 Prerequisite

- [Docker Compose](https://docs.docker.com/compose) it will provide all required dependencies (via a Node.Js container)

or without Docker:

- [NodeJs](https://nodejs.org)
- [Yarn](https://yarnpkg.com)
- [PostgreSQL](https://www.postgresql.org). You can use other database, making some adjustments.

## :checkered_flag: Getting Started (with Docker)

Run in bash:

```bash
# Install dependencies
yarn install --frozen-lockfile

# Build containers and run it
docker-compose up -d

# Open container's bash
docker-compose exec app sh

# Command below is run inside container
# Create database for development
PGPASSWORD=postgres psql -U postgres -h postgres -p 5432 postgres -c 'CREATE DATABASE app_development;'

# Create databases for development
yarn backend node ace migration:run

# Starts and keeps running frontend and backend
yarn start
```

After that server will be running on `localhost:5555`

## :checkered_flag: Getting Started (without Docker)

In this case, you must provide a database.
Run in bash:

```bash
# Install dependencies
yarn install --frozen-lockfile

# Create databases for development
yarn backend node ace migration:run

# Keeps running and watching for changes
yarn start
```

After that server will be running on `localhost:3333`


## 🔧 Running frontend hot reload

[Hot reload](https://vue-loader.vuejs.org/guide/hot-reload.html) allow that view changes can reflects to browser instantly.

Run in bash:

```bash
yarn frontend start
```

## 🎈 Running coding style linting

Run in bash:

```bash
# Find coding style errors and report
yarn lint

# or

# Find coding style errors; try to fix, otherwise, report
yarn lint:fix
```

## 🔧 Running tests

Run in bash:

```bash
yarn test
```

## ⛓️ Environment variables

In file `.env` is all the needed environment variables of project. Is recommended to store in it only values used on development or testing.

To production publishing, is recommended to ignore it and use another way to load environment variables outside project directory or use [AdonisJs default convention](https://adonisjs.com/docs/4.0/configuration-and-env#_environment_variables)

## Building a production package

The production build is a package optimized to increase the performance of the machines that will run it. Includes front-end and back-end.
To build production package, run in bash:

```bash
yarn build
```

An folder called `build` will be created with package inside. To run in production, run in bash:

```bash
node server.js
```

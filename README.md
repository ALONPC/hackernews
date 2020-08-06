# Reign Fullstack Developer Test 👑

Simple app that displays cool articles from Hackernews. Built with React, Node.js, MongoDB and Docker.
If you want to go straight on deploying, just:

### `docker-compose up`

This will run containers for both client and server side, using the MongoDB official image.
Data is seeded on the first run and a cron job handles the refetching once an hour.
Endpoints for client and server bellow. 👇

# Commands

## On the client folder

### `npm i`

Installs dependencies for the client.

### `npm run start`

Runs the client locally

## On the server folder

### `npm i`

Installs dependencies for the server.

### `npm start`

Runs the server locally

### `npm test`

Runs test for the server

## On the source folder

### `docker-compose up`

Deploys a dockerized version of the app.

## Endpoints

#### Client

### http://localhost:3000/

#### Server

### http://localhost:8000/api/hits

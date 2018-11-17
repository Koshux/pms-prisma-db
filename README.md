# Workplace/Office Parking Management System (PMS)

Parking Management System which is configurable for any office which has parking to offer their employees.  This could also extend to other parking spaces offered in public/private properties.

How to make this work:

NOTE: The phases `prisma deploy` and `prisma generate` have already been completed but are included in the docs purely for additional guidance.

## Install Prisma
npm install -g prisma

## Install Docker
https://docs.docker.com/v17.09/docker-for-windows/install/

## Enter Terminal
Use terminal to enter following commands:

  `sudo docker ps -a`
  - Works like task manager - see processes/services.
  - Make sure no service is running.
  - If other prisma services are running: sudo docker stop -f <container-name>

  `sudo docker-compose up -d`
  - For more info: https://docs.docker.com/compose/overview/
  - This is used to start docker & start the containers specified in the `docker-compose.yml` file.
  - docker-compose file currently contains 2 images:
    - mysql service
    - prisma-graphql service

  `prisma deploy`
  - Used to deploy the prisma graphql API

  `prisma generate`
  - Auto generated library connecting to Prisma API.

### Playground
In order to use both APIs, we need to open up two terminals:

  `node src/index.js`
  Used to start the nodejs server running the prisma client

  `graphql playground`
  Starts up the graphiQL playground providing you a workspace which hosts all configured layers.  In this guide we have two layers: application and database.
  Once started, it will open a tab in your browser at
  http://localhost:3000/playground.  You may now test the API.

## Guide
For more information see https://www.prisma.io/docs/get-started/01-setting-up-prisma-new-database-a002/ to bootstrap a prisma service (graphql API) using docker-compose and a fresh MySQL database.

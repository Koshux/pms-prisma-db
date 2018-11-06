# Workplace/Office Parking Management System (PMS)

Parking Management System which is configurable for any office which has parking to offer their employees.  This could also extend to other parking spaces offered in public/private properties.

How to make this work:
NOTE: The phases `deploy` and `generate` have already been completed but are included in the docs purely for additional guidance.

# Install Prisma
npm install -g prisma

# Install Docker
https://docs.docker.com/v17.09/docker-for-windows/install/

# Enter Terminal
Use terminal to enter following commands:
 1. sudo docker ps -a
  1.1. Works like task manager - see processes/services.
  1.2. Make sure no service is running.
  1.3. If other prisma services are running: sudo docker stop -f <container-name>

 2. sudo docker-compose up -d
  2.1. For more info: https://docs.docker.com/compose/overview/
  2.2. This is used to start docker & start the containers specified in the `docker-compose.yml` file.
  2.3. docker-compose file currently contains 2 images:
   2.3.1. mysql service
   2.3.2. prisma-graphql service

 3. prisma deploy
  3.1. Used to deploy the prisma graphql API

 4. prisma generate
  4.1. Auto generated library connecting to Prisma API.

For more information see https://docs.docker.com/compose/overview/ to bootstrap a prisma service (graphql API) using docker-compose and a fresh MySQL database.

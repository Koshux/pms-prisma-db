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
    - Works like task manager - see processes/services.
    - Make sure no service is running.
    - If other prisma services are running: sudo docker stop -f <container-name>

  2. sudo docker-compose up -d
    - For more info: https://docs.docker.com/compose/overview/
    - This is used to start docker & start the containers specified in the `docker-compose.yml` file.
    - docker-compose file currently contains 2 images:
      - mysql service
      - prisma-graphql service

  3. prisma deploy
    - Used to deploy the prisma graphql API

  4. prisma generate
    - Auto generated library connecting to Prisma API.

For more information see https://docs.docker.com/compose/overview/ to bootstrap a prisma service (graphql API) using docker-compose and a fresh MySQL database.

#!/bin/sh

sleep 10

cd /app/Web/dist/database

npx sequelize-cli db:create

npx sequelize-cli db:migrate

npx sequelize-cli db:seed:all

nodemon --delay 15 /app/Web/dist/app.js
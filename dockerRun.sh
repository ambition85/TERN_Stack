docker stop tern
docker rm tern
docker run --name tern -p 3000:3000 tern:latest nodemon /app/Web/app.js

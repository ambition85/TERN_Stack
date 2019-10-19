docker stop tern
docker rm tern
docker run --name tern -p 3000:3000 --entrypoint "nodemon --delay 5 /app/Web/app.js" tern:latest 
#docker run --name tern -p 3000:3000 tern:latest

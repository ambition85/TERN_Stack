docker cp ./Web/. tern:/app/Web

docker exec tern tsc --project /app/Web --listEmittedFiles || :

docker exec tern webpack --mode development --display verbose

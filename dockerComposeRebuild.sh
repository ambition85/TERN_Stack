docker cp ./Web/. ternstack_web_1:/app/Web

docker exec ternstack_web_1 tsc --project /app/Web --listEmittedFiles || :

docker exec ternstack_web_1 webpack --mode development --display verbose

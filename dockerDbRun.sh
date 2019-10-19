docker stop terndb
docker rm terndb
docker run -p 5432:5432 --name terndb -e POSTGRES_PASSWORD=mysecretpassword -d postgres:12-alpine

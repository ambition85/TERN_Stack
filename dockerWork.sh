docker stop terndev
docker rm terndev
docker run -it --entrypoint "/bin/sh" --name terndev tern:latest

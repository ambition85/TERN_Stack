FROM node:8.16.1-alpine

WORKDIR /app

COPY ./Web ./Web

RUN ls

WORKDIR /app/Web

RUN npm set progress=true

WORKDIR /app/Web

RUN npm install

RUN npm install -g typescript

RUN npm install nodemon -g

RUN echo $PWD

WORKDIR /app

RUN tsc --project ./Web --listEmittedFiles || :

RUN npm install -g webpack

RUN npm install -g webpack-cli

WORKDIR /app/Web

RUN webpack --mode development --display verbose

ENTRYPOINT [ "/app/Web/dockerEntryPoint.sh" ]

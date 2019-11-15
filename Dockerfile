FROM node:8.16.1-alpine

WORKDIR /app

COPY ./Web ./Web

RUN ls

WORKDIR /app/Web

RUN npm set progress=true

RUN npm install && \
    npm install -g typescript nodemon webpack webpack-cli

#RUN npm install -g nodemon

#RUN npm install -g webpack

#RUN npm install -g webpack-cli

RUN npm install copy-webpack-plugin

#RUN echo $PWD

WORKDIR /app/Web

RUN tsc --project . --listEmittedFiles || :

RUN webpack --mode development --display verbose

ENTRYPOINT [ "/app/Web/dockerEntryPoint.sh" ]

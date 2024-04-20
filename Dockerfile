FROM cypress/browsers:latest

WORKDIR /tests

COPY ./package.json .

RUN npm install

COPY ./cypress.config.js .
COPY ./cypress ./cypress
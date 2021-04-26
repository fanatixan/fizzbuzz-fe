#!/bin/bash

npm i && \
ng build && \
docker build -t fizzbuzz-fe:latest . && \
docker tag fizzbuzz-fe:latest docker-interview.devops.emea-hrit-375797.containers.ciocloudservices.ibm.com/fizzbuzz-fe:latest

# pull official base image
# FROM python:3.7.6-alpine
FROM node:16-alpine as base


# set work directory
WORKDIR /usr/src/express-app









# copy entrypoint.sh
# COPY ./entrypoint.qa.sh .


# copy project
COPY . .
# install dependencies
RUN npm install -g nodemon && npm install express && npm install && npm install -
RUN npm run build
# run entrypoint.sh
ENTRYPOINT ["sh","/usr/src/express-app/entrypoint.sh"]

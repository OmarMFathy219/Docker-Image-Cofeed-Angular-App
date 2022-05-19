# first stage of the build process for the dockerfile image as a base image
FROM node:current-alpine3.14 AS build

# make a directory for the build process
# -p: make the directory and all the parents that don't exist yet
RUN mkdir -p /app

# set the working directory to this directory
WORKDIR /app

# copy file and folders from the host to the container
COPY package.json /app

# install the dependencies
RUN npm install

# build the application
COPY . /app/
RUN npm run build --prod

# copy the built application to the container
FROM nginx:alpine
COPY --from=build /app/dist/cofeed-social-media-dashboard /usr/share/nginx/html


FROM node:8  
WORKDIR /app  
COPY package*.json /app  
RUN npm install  
COPY . /app 
CMD node index.js

# FROM node:latest as build-stage
# # Create app directory
# WORKDIR /app

# # Install NPM
# COPY package*.json /app
# RUN npm install

# # Bundle app source
# COPY . /app


# EXPOSE 6969

# CMD ["npm","start"]

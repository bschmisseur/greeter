##
# Project:   greeter
# File:      Dockerfile
# Description:
#   File used to define the environment and instructions for building a Docker image. It specifies the base image, dependencies, and commands needed to set up the application within a container.
#

# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 8000

# Define the command to run your app in development mode
CMD ["npm", "run", "dev"]

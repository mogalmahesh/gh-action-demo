# Use an official Node runtime as the parent image
FROM node:22

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package.json ./
COPY yarn.lock ./

# Install app dependencies
RUN yarn install

# Copy app source code
COPY . .

# Expose port 3000
EXPOSE 3000

# Define the command to run the app
CMD [ "node", "index.js" ]
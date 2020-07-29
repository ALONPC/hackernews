FROM node:latest
# Create app directory
WORKDIR /usr/src/app

ENV PORT=3000

# Install app dependencies
COPY package*.json ./

RUN npm install
# Copy app source code
COPY . .

#Expose port and start application
EXPOSE $PORT
CMD [ "npm", "start" ]
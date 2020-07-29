FROM node:latest
# Create app directory
WORKDIR /usr/src/app

ENV PORT=8000
ENV HOST=mongo

# Install app dependencies
COPY package*.json ./

RUN npm install
# Copy app source code
COPY . .

#Expose port and start application
EXPOSE $PORT
CMD [ "npm", "start" ]
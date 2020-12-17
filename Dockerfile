FROM node:latest
WORKDIR /alc-autobots-ui
COPY ./package.json /alc-autobots-ui
RUN npm install
COPY . .
CMD [ "npm", "run", "start" ]
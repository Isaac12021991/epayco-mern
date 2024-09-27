FROM node:20.16.0-slim
COPY . /home/service-one-db
WORKDIR /home/service-one-db
RUN npm install
EXPOSE 3001
CMD ["npm", "start"]
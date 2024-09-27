FROM node:20.16.0-slim
COPY . /home/service-two-backend
WORKDIR /home/service-two-backend
RUN npm install
EXPOSE 3002
CMD ["npm", "start"]
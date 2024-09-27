# 1. Etapa de construcción
FROM node:18-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# 2. Etapa de Nginx
FROM nginx:alpine

# Copiar la build generada en Vite
COPY --from=build /app/dist /usr/share/nginx/html

# Copiar archivo de configuración Nginx
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


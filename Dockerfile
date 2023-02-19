# Dockerfile for frontend
FROM node:14-alpine
WORKDIR /app
COPY Frontend/package*.json ./
RUN npm install
COPY frontend/ /app/frontend/
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]

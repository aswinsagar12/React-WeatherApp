FROM node:18.9.1

WORKDIR /app

COPY package.json .
RUN npm install

COPY . .
ENV REACT_APP_API_URL=http://weatherbackend:8080
EXPOSE 3000

CMD ["npm", "run", "start"]

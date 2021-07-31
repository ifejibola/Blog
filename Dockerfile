FROM node:13-alpine

ENV MONGO_DB_USERNAME=mongoadmin \ 
    MONGO_DB_PWD=secret

RUN mkdir -p /articlePortfolio
RUN npm install 
RUN npm build
COPY . /articlePortfolio

CMD ["node", "/articlePortfolio/build/bundle.js"]
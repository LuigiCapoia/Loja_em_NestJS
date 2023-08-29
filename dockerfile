FROM node:14
WORKDIR /nestjs-loja
ARG PORT=3000
ENV PORT=$PORT
EXPOSE $PORT
COPY . .
RUN npm install
RUN npx @nestjs/cli
RUN npm install uuid
RUN npm install -D @types/uuid
ENTRYPOINT npm run start
CMD ["npm","run","start:prod"]
FROM gcr.io/gnosis-webapp/core:latest

# Deps node



ADD package.json /tmp/package.json
ADD pnpm-lock.yaml /tmp/pnpm-lock.yaml
RUN cd /tmp && pnpm install 
RUN mkdir app && cp -a /tmp/node_modules /app 

# Build node

COPY . /app

WORKDIR /app





FROM gcr.io/gnosis-webapp/core:latest

# Deps node

ADD package.json /tmp/package.json
ADD pnpm-lock.yaml /tmp/pnpm-lock.yaml
RUN cd /tmp && pnpm install 
RUN mkdir app && cp -a /tmp/node_modules /app 

# Build node

COPY . /app
RUN cd /app && pnpx nx run frontend:export -y


WORKDIR /app

ADD ./ci/development/frontend/firebase.json .
ADD ./ci/development/frontend/.firebaserc .


RUN chmod +x scripts/parse_env_var.bash

RUN firebase deploy --token=$(. scripts/parse_env_var.bash FIREBASE_TOKEN) --project=coffee-and-feel --only=hosting 


ENV PORT=8080
EXPOSE 8080

WORKDIR /app/dist/apps/frontend


CMD ["npm", "start", "--", "--port", "8080"]




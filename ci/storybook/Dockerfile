FROM gcr.io/gnosis-webapp/core:latest

ARG FIREBASE_TOKEN


ADD package.json /tmp/package.json
ADD pnpm-lock.yaml /tmp/pnpm-lock.yaml
RUN cd /tmp && pnpm install 
RUN mkdir app && cp -a /tmp/node_modules /app 


COPY . /app
WORKDIR /app

RUN pnpm build-storybook
RUN firebase deploy --only=hosting:storybook --project=gnosis-webapp --token=${FIREBASE_TOKEN} 


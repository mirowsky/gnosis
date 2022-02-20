FROM node:16-alpine
# Install curl
RUN apk --no-cache add curl
# Install bash
RUN apk add --no-cache bash
# Install PNPM
RUN curl -f https://get.pnpm.io/v6.7.js | node - add --global pnpm@6 && pnpm config set store-dir ~/.pnpm-store
# Install Firebase tools
RUN pnpm install --global firebase-tools

ENTRYPOINT [ "bash" ]
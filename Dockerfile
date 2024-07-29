FROM node:16.13.0

WORKDIR /app

COPY package*.json ./

RUN npm install

ARG REACT_APP_API_URL

ENV REACT_APP_API_URL $REACT_APP_API_URL

COPY . .
# COPY nestjs/.env.development ./
# COPY .nestjs/.env.development ./
# Copy environment file
# ARG ENV_FILE
# COPY ${ENV_FILE} ./.env

# Set environment variables
# ENV REACT_APP_ENV=development

# Set environment variable for the build
# ENV NODE_ENV=development

# Build the application
# ARG REACT_APP_ENV
RUN npm run build

RUN npm install -g serve

EXPOSE 3001

CMD ["serve", "-s", "build", "-l", "3001"]

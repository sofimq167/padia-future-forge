# Dockerfile for React + TypeScript app built with Vite
# Use official Node.js image as build base
FROM node:20-alpine AS base

# Set working directory
WORKDIR /app

# Copy package.json and lock files
COPY package.json bun.lockb ./

# Install dependencies
RUN npm install --frozen-lockfile || bun install

# Copy source code
COPY . .

# Build the app
RUN npm run build

# Use nginx for serving static files
FROM nginx:1.25-alpine AS production

# Copy built files from build stage into /padia to serve at /padia/
RUN mkdir -p /usr/share/nginx/html/padia
COPY --from=base /app/dist /usr/share/nginx/html/padia

# Copy custom nginx config if needed
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

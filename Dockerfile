# syntax=docker/dockerfile:1.4
# Dockerfile for React + TypeScript app built with Vite
# Use official Node.js image as build base
FROM node:20-alpine AS base

# Set working directory
WORKDIR /app

# Copy package.json and lock files first (keeps install layer cacheable)
COPY package.json bun.lockb ./

# Install dependencies using BuildKit cache and prefer reproducible install
# - Try `npm ci` for reproducible installs, fall back to `npm install` or `bun install`.
RUN --mount=type=cache,target=/root/.npm \
	sh -c "npm ci --prefer-offline --no-audit --progress=false || npm install --frozen-lockfile || bun install"

# Copy source code
COPY . .

# Build the app
RUN npm run build

# Use nginx for serving static files
FROM nginx:1.25-alpine AS production

# Copy built files from build stage into web root to serve at /
COPY --from=base /app/dist /usr/share/nginx/html

# Copy custom nginx config for SPA rewrite
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
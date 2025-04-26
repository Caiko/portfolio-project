Use the official Node.js image as the base image
FROM node:18-alpine AS builder

Set the working directory inside the container
WORKDIR /app

Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

Install dependencies
RUN npm install --legacy-peer-deps

Copy the rest of the application code
COPY . .

Build the Next.js app
RUN npm run build

Use a lightweight image for serving the app
FROM node:18-alpine AS runner

Set the working directory inside the container
WORKDIR /app

Copy the build output and dependencies from the builder stage
COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

Expose the port the app runs on
EXPOSE 3000

Start the Next.js app
CMD ["npm", "run", "start"]
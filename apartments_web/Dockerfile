# Next.js Frontend Dockerfile

# Use an official Node runtime as a parent image
FROM node:22

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the Next.js application
RUN npm run build

# Expose port (usually 3000 for Next.js apps)
EXPOSE 3000

# Start the application
CMD ["npm", "start"]

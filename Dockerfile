# Stage 1: Build and Install Dependencies
FROM node:17.3 AS build

WORKDIR /app

# Install the Angular CLI globally
RUN npm install -g @angular/cli

# Copy only package.json and package-lock.json to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app source code to the container
COPY . .

# Expose the default Angular development server port (4200)
EXPOSE 4200 49153

# Start the Angular development server
CMD ["ng", "serve", "--host", "0.0.0.0", "--poll", "2000"]
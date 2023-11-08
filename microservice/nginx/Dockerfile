# Use the official Nginx image as the base image
FROM nginx:latest

# Copy the Nginx configuration file to the container
COPY ./default.conf /etc/nginx/conf.d/default.conf

# Expose the port where Nginx will listen for incoming requests (usually port 80)
EXPOSE 80

# Start the Nginx service
CMD ["nginx", "-g", "daemon off;"]

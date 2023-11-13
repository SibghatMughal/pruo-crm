# 使用官方的Node.js镜像作为基础镜像
FROM node:16-alpine

# 设置工作目录
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# 暴露项目运行的端口（默认是3000）
EXPOSE 3000

# Build the app
RUN npm run build

# Set the command to run the app
CMD [ "npm", "start" ]

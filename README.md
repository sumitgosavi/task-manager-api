# Task Manager API

A simple Node.js API for managing tasks.

## Project Structure

```
task-manager-api/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── index.js
├── .env.example
├── package.json
└── README.md
```

# task-manager-api
Node.js + Express 
# Clone the repo
git clone https://github.com/sumitgosavi/task-manager-api.git
cd task-manager-api

# Install packages
npm install

# Configure MongoDB Atlas:
# 1. Create free cluster at https://www.mongodb.com/cloud/atlas
# 2. Create & copy cluster URI to .env (MONGO_URI=...)
# 3. Create database & user in Atlas

# Use .env.example to set:
# MONGO_URI, PORT (default 5000), NODE_ENV

# Start development server
npm run dev

# API endpoints test via Postman/Thunder Client:
# GET    /api/tasks
# GET    /api/tasks/:id
# POST   /api/tasks
# PUT    /api/tasks/:id
# DELETE /api/tasks/:id

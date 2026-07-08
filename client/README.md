# Task Manager - MERN Stack

## 📌 Project Description

Task Manager is a Full Stack MERN (MongoDB, Express.js, React.js, Node.js) web application that helps users manage their daily tasks efficiently.

The application provides secure user authentication using JWT (JSON Web Token), allowing each user to manage only their own tasks.

Users can:
- Register and Login securely
- Add new tasks
- Edit existing tasks
- Mark tasks as completed
- Delete tasks
- Delete all completed tasks
- Search tasks
- Filter tasks
- Sort tasks by priority, due date, and creation date
- View task statistics (Total, Completed, Pending)

---

# 👨‍💻 Developer

**Name:** SAMBHU Pr. SAMANTARA

GitHub:
https://github.com/sambhu08samantara-web

---

# 🚀 Tech Stack

## Frontend
- React.js
- Axios
- React Toastify
- CSS3
- HTML5

## Backend
- Node.js
- Express.js

## Database
- MongoDB Atlas
- Mongoose

## Authentication
- JWT (JSON Web Token)
- bcryptjs

## Deployment
- Frontend : Vercel
- Backend : Render
- Database : MongoDB Atlas

---

# 📂 Project Structure

```
TaskManager-MERN/
│
├── client/
│   ├── public/
│   ├── src/
│   ├── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│
├── README.md
```

---

# ✨ Features

### Authentication

- User Registration
- User Login
- JWT Authentication
- Protected Routes

### Task Management

- Add Task
- Edit Task
- Delete Task
- Mark Task Completed
- Delete Completed Tasks

### Task Organization

- Search Tasks
- Filter Tasks
- Sort by:
  - Newest
  - Oldest
  - Priority
  - Due Date

### Dashboard

- Total Tasks
- Completed Tasks
- Pending Tasks

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/sambhu08samantara-web/TaskManager-MERN.git
```

Go inside project

```bash
cd TaskManager-MERN
```

---

## Backend Setup

```bash
cd server
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=5000

MONGO_URI=YOUR_MONGODB_CONNECTION_STRING

JWT_SECRET=YOUR_SECRET_KEY
```

Run Backend

```bash
npm run dev
```

---

## Frontend Setup

Open another terminal

```bash
cd client
```

Install dependencies

```bash
npm install
```

Run frontend

```bash
npm start
```

Frontend runs on

```
http://localhost:3000
```

Backend runs on

```
http://localhost:5000
```

---

# 📡 API Documentation

## Authentication APIs

### Register User

```
POST /api/auth/register
```

Request

```json
{
  "name": "John",
  "email": "john@example.com",
  "password": "123456"
}
```

---

### Login User

```
POST /api/auth/login
```

Request

```json
{
  "email": "john@example.com",
  "password": "123456"
}
```

Returns

```json
{
  "token": "JWT_TOKEN"
}
```

---

## Task APIs

### Get All Tasks

```
GET /api/tasks
```

---

### Add Task

```
POST /api/tasks
```

Request

```json
{
  "title": "Complete Project",
  "priority": "High",
  "dueDate": "2026-07-20"
}
```

---

### Update Task

```
PUT /api/tasks/:id
```

---

### Delete Task

```
DELETE /api/tasks/:id
```

---

### Delete Completed Tasks

```
DELETE /api/tasks/completed/all
```

---

# 🔒 Authentication

All Task APIs require

```
Authorization: Bearer YOUR_JWT_TOKEN
```

---

# 🌐 Live Deployment

## Frontend (Vercel)

https://taskmanager-frontend-umber.vercel.app/

## Backend (Render)

https://taskmanager-backend-iico.onrender.com

---

# 📸 Screenshots

- Login Page
- Register Page
- Dashboard
- Add Task
- Task List

---

# 📈 Future Improvements

- Dark Mode
- Email Notifications
- File Attachments
- Categories
- Calendar View
- Drag & Drop Tasks
- Mobile App

---

# 📜 License

This project is developed for educational purposes as a Full Stack MERN Task Manager Project.

---

# 🙏 Acknowledgements

- MongoDB Atlas
- Express.js
- React.js
- Node.js
- Render
- Vercel
- JWT
- React Toastify
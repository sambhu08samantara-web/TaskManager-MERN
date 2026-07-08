# Task Manager - MERN Stack Project

## Project Overview

Task Manager is a full-stack web application developed using the MERN Stack (MongoDB, Express.js, React.js, and Node.js). It helps users organize and manage their daily tasks efficiently. The application provides secure user authentication and allows users to create, update, complete, search, filter, sort, and delete tasks through a responsive and user-friendly interface.

---

## Technologies Used

### Frontend

* React.js
* Axios
* React Toastify
* HTML5
* CSS3
* JavaScript (ES6)

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (JSON Web Token)
* bcryptjs
* dotenv
* CORS

---

## Features

### User Authentication

* User Registration
* User Login
* Secure JWT Authentication
* Protected Routes
* Logout

### Task Management

* Add New Task
* Edit Existing Task
* Delete Individual Task
* Mark Task as Completed
* Delete All Completed Tasks

### Task Organization

* Search Tasks
* Filter Tasks (All, Pending, Completed)
* Sort Tasks

  * Newest
  * Oldest
  * Priority
  * Due Date

### Additional Features

* Task Priority (High, Medium, Low)
* Due Date Selection
* Dashboard Statistics

  * Total Tasks
  * Completed Tasks
  * Pending Tasks
* Toast Notifications
* Responsive User Interface

---

## Project Structure

```
TaskManager-MERN
│
├── client
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
│
├── server
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## Installation

### Clone the Repository

```bash
git clone <https://github.com/sambhu08samantara-web/TaskManager-MERN.git>
```

---

### Install Backend Dependencies

```bash
cd server
npm install
```

---

### Install Frontend Dependencies

```bash
cd client
npm install
```

---

## Environment Variables

Create a `.env` file inside the **server** folder.

Example:

```
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

## Running the Project

### Start Backend

```bash
cd server
npm start
```

---

### Start Frontend

```bash
cd client
npm start
```

---

## Application Workflow

1. User registers a new account.
2. User logs in securely.
3. JWT token is generated.
4. User can:

   * Add tasks
   * Edit tasks
   * Complete tasks
   * Delete tasks
   * Search tasks
   * Filter tasks
   * Sort tasks
5. Dashboard updates automatically.

---

## API Endpoints

### Authentication

| Method | Endpoint            | Description   |
| ------ | ------------------- | ------------- |
| POST   | /api/users/register | Register User |
| POST   | /api/users/login    | Login User    |

### Tasks

| Method | Endpoint                 | Description            |
| ------ | ------------------------ | ---------------------- |
| GET    | /api/tasks               | Get All Tasks          |
| POST   | /api/tasks               | Add Task               |
| PUT    | /api/tasks/:id           | Update Task            |
| DELETE | /api/tasks/:id           | Delete Task            |
| DELETE | /api/tasks/completed/all | Delete Completed Tasks |

---

## Future Enhancements

* Dark Mode
* Task Categories
* Task Reminders
* File Attachments
* Email Notifications
* Calendar Integration

---

## Learning Outcomes

This project helped in understanding:

* MERN Stack Development
* REST API Development
* MongoDB Database Operations
* JWT Authentication
* React Hooks
* State Management
* CRUD Operations
* Responsive UI Design
* Client-Server Communication

---

## Conclusion

The Task Manager application successfully demonstrates a complete MERN Stack CRUD application with secure authentication and modern task management features. It provides users with an efficient platform to organize daily activities while showcasing full-stack web development concepts and best practices.

---

## Developed By

**Sambhu Prasad Samantara**
B.Tech CSE

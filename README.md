# Login/Register Dashboard App

A full-stack web application built as a test assignment for the **Full Stack Development Internship** at **Quantum IT Innovation**. This app includes user authentication, role-based dashboard display, status indicators, pagination, and a responsive UI.

## Live Demo

[View Live App](https://login-register-app-ashen.vercel.app/dashboard)

## Tech Stack

### Frontend (Vite + React.js)
- React 18
- React Router
- Custom CSS
- Axios for API communication
- Icons via `react-icons`

### Backend (Node.js + Express.js)
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Bcrypt for password hashing
- Dotenv for environment variables

## Features

- User Registration & Login
- JWT-based Authentication
- Role Display: Admin, Publisher, Reviewer, Moderator
- Status Display: Active, Inactive, Suspended
- User creation date display
- Action Buttons (Settings & Cancel)
- Paginated Dashboard Table (10 users per page)
- Responsive UI with Scroll Support


---

## 🧑‍💻 Setup

To run this project locally, follow these steps:

1. **Clone & Install repository:**
```bash
git clone https://github.com/manthandhrana/job_scheduling.git
cd login-register-app
npm install
```


2. **Goto Backend and setup .env file**
```
cd backend
```
.env file:
```
MONGODB_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret_key
```

3. **Run Backend**
```
node ./server.js
```

4. **server running**
```
Server Running On : http://localhost:3000
```

5. **Goto Frontend and setup .env file**
```
cd frontend
```
.env file:
```
VITE_API_BASE_URL=http://backend_url/api
```

## How AgentDesk Look Like

#### Registration Page :
![image](https://github.com/user-attachments/assets/4dd39d1f-dfd1-4a5f-9870-cf519dce57a4)

#### Login Page :
![image](https://github.com/user-attachments/assets/c0a6505e-a128-4978-982e-7cf500fb5d77)

#### Dashboard Page :
![image](https://github.com/user-attachments/assets/2d750997-57f6-442a-9179-8bf3d7cc4eec)


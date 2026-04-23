# TalentTrack Job Portal

## 📌 Overview

**TalentTrack** is a full-stack MERN (MongoDB, Express, React, Node.js) job portal web application designed to help users discover job opportunities and apply seamlessly. The platform includes authentication, job listings, and application tracking features.

---

## 🚀 Features

### 👤 User Features

* 🔐 User Signup & Login (JWT Authentication)
* 🔍 Browse job listings
* 📄 View job details
* 📨 Apply for jobs with one click
* 📊 View applied jobs in dashboard

---

### 🧑‍💼 System Features

* RESTful API using Express.js
* Secure authentication using JWT
* Password encryption using bcrypt
* MongoDB database for storing users, jobs, and applications

---

## 🛠️ Tech Stack

### Frontend:

* React.js
* Vite
* CSS

### Backend:

* Node.js
* Express.js

### Database:

* MongoDB

### Other Tools:

* JWT (Authentication)
* bcrypt.js (Password hashing)
* dotenv (Environment variables)

---

## 🔄 How It Works

1. User registers or logs in
2. Authentication handled using JWT
3. Frontend sends API requests to backend
4. Backend processes request and interacts with MongoDB
5. Data is returned and displayed in UI

---

## 🔌 API Endpoints

* `POST /api/auth/signup` → Register user
* `POST /api/auth/signin` → Login user
* `GET /api/jobs` → Get job listings
* `POST /api/applications` → Apply for job
* `GET /api/applications/me` → View user applications

---

## 🌐 Deployment

* Frontend can be deployed on Netlify
* Backend can be deployed on Render / Railway

---

## ⚠️ Note

* `node_modules` is excluded (can be installed using `npm install`)
* Backend and database must be running for full functionality

---

## 🔮 Future Enhancements

* 📎 Resume upload feature
* 🔍 Advanced job filtering
* 📧 Email notifications
* 🧑‍💼 Admin dashboard
* 🌐 Full cloud deployment

---

## 👨‍💻 Author

Developed by **Akshat Raj**

---

## 📜 License

This project is for educational purposes.


## Setup

```bash
npm install
cp .env.example .env
```

Update `.env` if your MongoDB connection is different:

```bash
MONGODB_URI=mongodb://127.0.0.1:27017/new_job_portal
JWT_SECRET=replace-this-with-a-long-random-secret
```

## Run

```bash
npm run dev
```

Open `http://localhost:5173`.

If port `5000` is already in use, run the backend and frontend separately:

```bash
PORT=5001 npm run start
VITE_API_PROXY_TARGET=http://localhost:5001 npm run client
```

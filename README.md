# 🗨️ Real-Time Chat Application

## 📌 Task-04 – Real-Time Chat App (WebSocket Based)

This project is a **Real-Time Chat Application** built using WebSocket technology to enable instant messaging between users. It allows users to create accounts, join chat rooms or initiate private conversations, and exchange text messages in real-time.

---

## 🚀 Features

### ✅ Core Features
- 💬 **Instant Messaging** using WebSocket
- 👤 **User Authentication** (Sign up / Login)
- 🏠 **Chat Rooms** creation and joining
- 🔒 **Private Conversations**
- 🔄 **Real-time Text Message Exchange**

### ✨ Optional Features (Implemented/To-Do)
- 🕓 **Chat History** (Stored in database)
- 🔔 **Notifications**
- 👁️ **User Presence Indicators**
- 📁 **Multimedia File Sharing** (Images, Videos, Docs)

---

## 🛠️ Tech Stack

### Frontend:
- ⚛️ React.js
- 🌐 Socket.IO Client
- Tailwind CSS 

### Backend:
- 🟢 Node.js
- 📦 Express.js
- 🔌 Socket.IO
- 🛡️ JWT Authentication
- 🧰 bcrypt for password hashing

### Database:
- 🍃 MongoDB (Mongoose ODM)

## 📁 Project Structure

```bash
├── frontend/                  
│   ├── src/
│   └── ...
├── backend/                  # Node.js + Express Backend
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── ...
├── .env
├── package.json
└── README.md

# Clone the repository
git clone https://github.com/your-username/real-time-chat-app.git

# Install server dependencies
cd backend
npm install

# Install client dependencies
cd frontend
npm install

# Start backend server
cd backend
npm run dev

# Start frontend
cd frontend
npm start


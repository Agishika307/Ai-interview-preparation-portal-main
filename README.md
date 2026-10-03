# 🤖 AI Interview Portal

An AI-powered mock interview platform built using **React** and the **Google Gemini API**. The application simulates real interview experiences by generating intelligent interview questions and assisting users in preparing for technical and HR interviews through an interactive interface.

---

## 🚀 Overview

The AI Interview Portal is designed to help students and job seekers improve their interview skills by providing AI-generated interview sessions. Users can practice anytime, receive dynamic questions, and build confidence before real interviews.

---

## ✨ Features

* 🤖 AI-generated interview questions using Google Gemini API
* 💼 Technical and HR interview simulations
* 💬 Interactive chat-based interview experience
* ⚡ Real-time AI responses
* 📱 Fully responsive user interface
* 🎨 Clean and modern design
* 🔄 Smooth React component architecture

---

## 🛠️ Tech Stack

### Frontend

* React.js
* JavaScript (ES6+)
* HTML5 / CSS3
* Vite

### Backend

* Node.js & Express.js
* MongoDB & Mongoose
* JSON Web Tokens (JWT) for authentication
* Bcrypt.js for secure password hashing

### AI Integration

* Google Gemini API

### Development Tools

* Git
* GitHub
* VS Code

---

## 📂 Folder Structure

```text
AI-Interview-Portal/
│
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
├── package-lock.json
└── README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/your-username/AI-Interview-Portal.git
```

### Navigate to the project

```bash
cd AI-Interview-Portal
```

### Install dependencies

1. Install Frontend dependencies:
```bash
npm install
```

2. Install Backend dependencies:
```bash
cd server
npm install
cd ..
```

### Configure Environment Variables

1. Frontend `.env` in the project root:
```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

2. Backend `.env` in the `server/` directory:
```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_jwt_secret_key
```

> **MongoDB Atlas Note**: Ensure your current IP is whitelisted in MongoDB Atlas under **Network Access** -> **Add IP Address** -> **Allow Access from Anywhere (`0.0.0.0/0`)**.

### Start the Application

1. **Start Backend Server** (Port 5000):
```bash
npm run server
# or: cd server && npm start
```

2. **Start Frontend Development Server** (Port 5173):
```bash
npm run dev
```

---

## 🎯 Project Objectives

* Help users prepare for placement interviews.
* Simulate realistic interview scenarios.
* Generate intelligent interview questions using AI.
* Improve communication and problem-solving skills.
* Provide an accessible interview practice platform.

---

## 👥 Team Project

This application was built as a collaborative group project. Team members contributed across multiple areas, including:

* Frontend development
* React component architecture
* AI API integration
* UI/UX design
* Testing and debugging
* Project integration

---

## 🔮 Future Improvements

* 🔐 User authentication
* 📄 Resume upload and analysis
* 🎙️ Voice-based interviews
* 📹 Video interview simulation
* 📊 Performance analytics
* ⭐ Interview history
* 📈 Personalized feedback and scoring
* 🧩 Multiple interview domains (DSA, Web Development, HR, Aptitude)

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a new branch.

```bash
git checkout -b feature-name
```

3. Commit your changes.

```bash
git commit -m "Add feature"
```

4. Push to GitHub.

```bash
git push origin feature-name
```

5. Open a Pull Request.

---

## 📜 License

This project is developed for educational and learning purposes.

---

## 🙌 Acknowledgements

* Google Gemini API for AI-powered interview generation.
* React.js for the frontend framework.
* The open-source community for the tools and libraries that made this project possible.

---
⭐ **If you found this project useful, consider giving it a Star!**

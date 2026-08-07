# Chat App MERN

A real-time chat application forged in MERN.

## 📑 Contents
❄ What is Chat App MERN?
❄ Quick start
❄ Tech stack
❄ Features
❄ Project structure
❄ Scripts
❄ Contributing
❄ License

## What is Chat App MERN?
Chat App MERN is a real-time, responsive chat application built on the MERN stack (MongoDB, Express.js, React, Node.js). It replaces fragmented communication with a streamlined, real-time messaging experience, powered by Socket.io, secured with JWT, and featuring a modern UI with Tailwind CSS and DaisyUI.

## ❄ Quick start
Prerequisites: Node.js 20.x · npm / pnpm / yarn · MongoDB

### 1. Install
```bash
# Clone the repository
git clone <repository-url>
cd Chat-App-Mern-stack

# Install dependencies
npm install
npm install --prefix frontend
```

### 2. Environment (server-side)
Create a `.env` file in the `backend` directory:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 3. Development
```bash
npm run dev          # → http://localhost:3000
```

## ❄ Tech stack
| Layer | Tech |
| :--- | :--- |
| **Framework** | React.js (Frontend) · Node.js + Express (Backend) |
| **Database** | MongoDB + Mongoose |
| **Real-time** | Socket.io |
| **Auth** | JWT (JSON Web Token) · bcryptjs |
| **Styling** | Tailwind CSS |

## ❄ Features
- Real-time messaging (Socket.io)
- JWT-based authentication
- Private and group-ready architecture
- Responsive, modern UI

## ❄ Project structure
```text
Chat-App-Mern-stack/
├─ backend/             ← Node.js / Express server
├─ frontend/            ← React / Tailwind client
├─ .env                 ← Environment variables (ignored)
├─ package.json         ← Root scripts
└─ README.md
```

## ❄ Scripts
| Command | What it does |
| :--- | :--- |
| `npm run dev` | Dev server (concurrent backend + frontend) |
| `npm run build` | Install and build frontend |
| `npm run start` | Serve production build (backend) |

## ❄ Contributing
PRs welcome. Keep it small and focused.


# Chat-App-MERN-Stack

## Description
Chat-App-MERN-Stack is a real-time chat application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It allows users to communicate in real time with an interactive and user-friendly interface.

## Features
- Real-time messaging
- User authentication (JWT-based authentication)
- Private and group chats
- Online/offline user status
- Typing indicators
- Message notifications
- Responsive UI

## Tech Stack
- **Frontend:** React.js,Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Real-time Communication:** Socket.io
- **Authentication:** JWT (JSON Web Token)

## Installation & Setup
### Prerequisites
Ensure you have the following installed on your system:
- Node.js
- MongoDB

### Backend Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/Chat-App-MERN-Stack.git
   cd Chat-App-MERN-Stack/server
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the `server` directory and add the following:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```
4. Start the backend server:
   ```sh
   npm start server
   ```
4. Start the frontend server:
   ```sh
   npm run dev
   ```


 

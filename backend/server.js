import express from "express"; 
import dotenv from "dotenv"; 

import authRoutes from "./routes/auth.routes.js"; 
import connectToMongoDB from "./db/connectToMongodb.js"; 

const app = express();
const PORT = process.env.PORT || 3000;    

dotenv.config(); // to access the env variables

app.use(express.json()); // this will allow us to extract the req from authRoutes.controller.js

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
   // root route http://localhost:3000/
   res.send("server is ready");  
});


// Adding listener to the server to run the server on a specific port
app.listen(PORT, () => { 
    connectToMongoDB(); 
    console.log(`Server is running on port ${PORT}`); 
});   
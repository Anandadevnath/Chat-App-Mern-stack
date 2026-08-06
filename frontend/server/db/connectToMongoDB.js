import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: '/home/raccoon/Documents/Project/Chat-App-Mern-stack/frontend/server/.env' });

const connectToMongoDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_DB_URI);
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB;

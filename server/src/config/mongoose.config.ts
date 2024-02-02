import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI);
		console.log(conn);
		console.log('MongoDB connected');
	} catch (error: any) {
		console.log(error.message);
		process.exit(1);
	}
};
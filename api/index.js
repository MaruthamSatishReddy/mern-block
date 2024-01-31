import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import { error } from 'console';

dotenv.config();
mongoose.connect(process.env.MONGO).then(() => {
    console.log("Mongo Db is Connected");
}).catch(error => {
    console.error("Getting Error While Connecting MongoDB:" + error);
});
const app = express();
app.use(express.json());
app.listen(3000, () => {
    console.log("Server Is Running::3000");
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.use((error,req,res,next)=>{
   const statusCode= error.statusCode || 500;
   const message= error.message || 'Internal Server Error';
   res.status(statusCode).json(
    {success: false,
        statusCode,
    message});
    });


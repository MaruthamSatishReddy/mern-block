import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js';

dotenv.config();
mongoose.connect(process.env.MONGO).then(() => {
    console.log("Mongo Db is Connected");
}).catch(error => {
    console.error("Getting Error While Connecting MongoDB:" + error);
});
const app = express();

app.listen(3000, () => {
    console.log("Server Is Running::3000");
});

app.use('/api/user', (userRoutes));


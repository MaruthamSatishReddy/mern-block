import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();
mongoose.connect(process.env.MONGO).then(() => {
    console.log("Mongo Db is Connected");
}).catch(error => {
    console.error("Getting Error While Connecting MongoDB:" + error);
});
const app = express();

app.listen(3000, () => {
    console.log("Server Is Running::3000");
}) 
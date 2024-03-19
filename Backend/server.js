import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import tripRoute from './routes/tripRoute.js'
import cors from 'cors'
import cookieParser from 'cookie-parser';


dotenv.config()
connectDB();//Connect to MongoDB
const port = process.env.PORT || 8000;

const app = express();
app.use(cors())
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({extended : false}))

app.use('/api/trip',tripRoute)

app.listen(port ,()=>{
    console.log('Server running on '+ port)
})
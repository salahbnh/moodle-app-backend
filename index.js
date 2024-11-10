import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';

import userRoutes from './routes/userRoute.js';
import resumeRoute from './routes/resumeRoute.js';

// Create an Express application
const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();
const MONGODB_KEY= "mongodb+srv://salahbounouh:5WjFtHiaB1zDj6VP@cluster0.cdwcx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// Middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  
}));


mongoose.set('debug',true);
mongoose.Promise = global.Promise;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('public'));

app.use('/api/user', userRoutes);
app.use('/api/resume',resumeRoute)


mongoose.connect(MONGODB_KEY)
.then(() => console.log("Connected to MongoDB"))  
.catch(err => console.error("Could not connect to MongoDB", err));


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// moodleapp-85930
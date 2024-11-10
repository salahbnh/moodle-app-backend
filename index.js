import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';

import userRoutes from './routes/userRoute.js';
import examRoutes from './routes/examRoute.js'

// Create an Express application
const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();

// Middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));


mongoose.set('debug',true);
mongoose.Promise = global.Promise;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('public'));

app.use('/api', userRoutes);
app.use('/api', examRoutes);


// Connect to MongoDB
mongoose.connect(process.env.MONGODB_KEY)
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("Could not connect to MongoDB", err));


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

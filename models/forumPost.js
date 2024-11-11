import mongoose from 'mongoose';
import ForumResponse from './forumResponse.js';

const forumPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['cours', 'question', 'exercice', 'projet'],
    required: true,
  },
  author: {
    type : String,
    required: true
  },
  views : {
    type: Number,
    required :true
  },
  response: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ForumResponse',  // Reference to the ForumResponse model
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('ForumPost', forumPostSchema);

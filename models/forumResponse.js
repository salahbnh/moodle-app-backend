import mongoose from 'mongoose';

const responseSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  postId: {   // Make sure to add postId field for the relation
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ForumPost',
    required: true,
  },
});

const ForumResponse = mongoose.model('ForumResponse', responseSchema);
export default ForumResponse;

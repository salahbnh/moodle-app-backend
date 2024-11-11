import mongoose from 'mongoose';

const forumAccueilSchema = new mongoose.Schema({
  profName: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  field: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('ForumAccueil', forumAccueilSchema);

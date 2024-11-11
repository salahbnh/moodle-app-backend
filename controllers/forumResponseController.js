import ForumResponse from '../models/forumResponse.js';
import ForumPost from '../models/forumPost.js';

export const createResponse = async (req, res) => {
  try {
    const { postId, responseContent, author } = req.body;

    // Check if the post exists
    const postExists = await ForumPost.findById(postId);
    if (!postExists) {
      return res.status(404).json({ error: 'Post not found' });
    }

    // Create a new response
    const newResponse = new ForumResponse({
      postId,
      content: responseContent,
      author: author || 'Anonymous',
    });

    await newResponse.save();

    // Update the post to include the new response
    postExists.response.push(newResponse._id);
    await postExists.save();

    res.status(201).json(newResponse);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating response' });
  }
};

export const getResponsesForPost = async (req, res) => {
    try {
      const { postId } = req.params;
      const responses = await ForumResponse.find({ postId }).sort({ createdAt: 1 }); 
      res.status(200).json(responses);
    } catch (error) {
      res.status(500).json({ error: 'Error retrieving responses' });
    }
  };
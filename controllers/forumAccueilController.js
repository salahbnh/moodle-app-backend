import ForumAccueil from "../models/forumAccueil.js"

export const createForum = async (req, res) => {
  try {
    const { title, profName, field } = req.body;
    console.log(title)
    const newPost = new ForumAccueil({ title, profName, field });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: 'Error creating post' });
  }
};

export const getForums = async (req, res) => {
  try {
    const posts = await ForumAccueil.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving posts' });
  }
};


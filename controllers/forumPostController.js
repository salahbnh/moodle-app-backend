import ForumPost from "../models/forumPost.js";

// Contrôleur pour créer un post
export const createPost = async (req, res) => {
  try {
    const { title, content, type, author, views = 0, response = [] } = req.body; // Default response to an empty array

    // Check for required fields
    if (!title || !content || !type || !author) {
      return res.status(400).json({ error: 'Tous les champs sont requis' });
    }

    // Validate the category
    const validCategories = ['cours', 'question', 'exercice', 'projet'];
    if (!validCategories.includes(type)) {
      return res.status(400).json({ error: 'Catégorie invalide' });
    }

    const newPost = new ForumPost({
      title,
      content,
      type: type.toLowerCase(),
      author,
      views, // Default views is 0
      response, // Now it's an array
    });

    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ error: 'Erreur lors de la création du post' });
  }
};

// Contrôleur pour récupérer les posts
export const getPosts = async (req, res) => {
  try {
    const posts = await ForumPost.find();
    res.status(200).json(posts);
  } catch (error) {
    console.error(error); // Afficher l'erreur dans la console pour le débogage
    res.status(500).json({ error: 'Erreur lors de la récupération des posts' });
  }
  
};
export const getPostById = async (req, res) => {
  try {
    const { id } = req.params; // Récupérer l'ID depuis les paramètres de la requête
    const post = await ForumPost.findById(id); // Trouver le post par ID

    if (!post) {
      return res.status(404).json({ error: 'Post non trouvé' });
    }

    res.status(200).json(post);
  } catch (error) {
    console.error(error); // Afficher l'erreur pour le débogage
    res.status(500).json({ error: 'Erreur lors de la récupération du post' });
  }
};
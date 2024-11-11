import express from 'express';
import { createPost, getPosts, getPostById } from '../controllers/forumPostController.js';

const router = express.Router();

router.post('/posts', createPost);
router.get('/get', getPosts);
router.get('/posts/:id', getPostById); // Ajout de l'endpoint pour récupérer un post par ID

export default router;
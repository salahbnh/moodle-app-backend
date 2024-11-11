import express from 'express';
import { createResponse, getResponsesForPost } from '../controllers/forumResponseController.js';

const router = express.Router();

router.post('/responses', createResponse);
router.get('/responses/:postId', getResponsesForPost);

export default router;

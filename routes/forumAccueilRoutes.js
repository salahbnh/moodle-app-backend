import express from 'express';
import { createForum, getForums } from '../controllers/forumAccueilController.js'

const router = express.Router();

router.post('/forumPost', createForum);
router.get('/forumGet', getForums);

export default router;

import express from 'express';
import { getPosts, getPost, createPost, updatePost, likePost, deletePost } from '../controllers/posts.js';

const router = express.Router();


router.get('/', (req,res)=>{
    res.send('This Works');
});

export default router;
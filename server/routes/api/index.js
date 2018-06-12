const express = require('express');
const router = express.Router();
const userRouter = require('./user')
const usersRouter = require('./users')
const postRouter = require('./post')
const postsRouter = require('./posts')

router.use('/user', userRouter);
router.use('/users', usersRouter);
router.use('/post', postRouter);
router.use('/posts', postsRouter);


module.exports = router;
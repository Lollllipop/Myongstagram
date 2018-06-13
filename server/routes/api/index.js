const express = require('express');
const router = express.Router();
const asyncError = require('../../utils/async-error');
const db = require('../../models');

const userRouter = require('./user')
const usersRouter = require('./users')
const postRouter = require('./post')
const postsRouter = require('./posts')


router.get('/', (req, res, next) => {
  res.send(true);
})

router.use('/user', userRouter);
router.use('/users', usersRouter);
router.use('/post', postRouter);
router.use('/posts', postsRouter);


module.exports = router;
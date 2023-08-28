// Importing/requiring modules
const router = require('express').Router();

// Importing/requiring routes
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

// Using imported routes
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

// Exporting router
module.exports = router;
// Importing/requirig models
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// Defining associations between models

// User can have multiple posts
User.hasMany(Post, {
    foreignKey: 'user_id'
});

// A Post belongs to a user
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

// A Comment belongs to a user
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

  // A Comment belongs to a post
Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

// A User can have multiple comments
User.hasMany(Comment, {
    foreignKey: 'user_id'
});

// A Post can have multiple comments
Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

//exporting the models & associations 
module.exports = {User, Post, Comment};
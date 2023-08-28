//importing/requiring modules
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Defining the Post class that extends Sequelize's Model class
class Post extends Model {}

// Initializing the Post model with its attributes/configurations
Post.init(
    {
      // Post ID
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      // Title of the post
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      // Content of the post
      post_content: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      // User ID who created the post
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      }
    },
    {
      // Sequelize configuration options
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'post'
    }
  );

  // Exporting the Post model
  module.exports = Post;
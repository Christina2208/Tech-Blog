//importing/requiring modules
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// defining Comment class that extends Sequelize's Model class
class Comment extends Model {}

// Initializing the Comment model with its attributes/configurations
Comment.init(
  {
    // Comment ID
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      // User ID who posted the comment
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id'
        }
      },
      // Name of the commenter
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // Post ID to which the comment is related 
      post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'post',
          key: 'id'
        }
      },
      // Text of the comment
      comment_text: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
      },
      // Date the comment was created
      date_created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
  },
  {
    // Sequelize configuration options
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
  }
);

// Export the Comment model
module.exports = Comment;
//importing/requiring modules
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

// Defining the User class that extends Sequelize's Model class
class User extends Model {
  //check if the provided login password matches the user's hashed password
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

// Initializing the User model with its attributes/configurations
User.init(
    {
        // User ID 
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        // Username of the user 
        username: {
          type: DataTypes.STRING,
          allowNull: false
        },
        // Email of the user
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
            isEmail: true
          }
        },
        // Password of the user
        password: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [4]
          }
        }
      },
  {
      hooks: {
        // Hash the password before creating or updating a user
        async beforeCreate(newUserData) {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
        },
          // Hash the password before updating a user
        async beforeUpdate(updatedUserData) {
            updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
            return updatedUserData;
        }
      },
    // Sequelize configuration options
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
  }
);

// Export the User model
module.exports = User;
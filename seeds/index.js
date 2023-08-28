// Importing/requiring seeds
const seedPosts = require('./post-seeds');
const seedUsers = require('./user-seeds');
const seedComments = require('./comment-seeds');

// Imporing/requiring sequelize connection
const sequelize = require('../config/connection');

// Function to seed all data
const seedAll = async () => {
  await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
  
  // Seed users
  await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');
  
  // Seed posts
  await seedPosts();
    console.log('\n----- POSTS SEEDED -----\n');

  // Seed comments
  await seedComments();
    console.log('\n----- COMMENTS SEEDED -----\n');

  // Exiting the process when seeding is complete
  process.exit(0);
};

//start seeding process
seedAll();
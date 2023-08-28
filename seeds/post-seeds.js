// Importing/requiring the Post model
const { Post } = require('../models');

// Array of post data to be used for seeding
const postData = [
    {
        title: "Nintendo Switch has finally surpassed sales of the Wii in the United States",
        post_content: "New video game hardware data which has been provided for July 2023 shows that sales of the Nintendo Switch family of systems have now surpassed the Wii in the United States. The release of the excellent The Legend of Zelda: Tears of the Kingdom certainly helped boost Nintendo Switch hardware sales last month, according to Circana, formally known as the NPD Group.",
        user_id: 3
    },
    {
        title: "Star Wars Is Redoing The Force Awakens' Luke Skywalker Story, 8 Years Later",
        post_content: "Star Wars is redoing Luke Skywalker's Star Wars: The Force Awakens story eight years later in Ahsoka. The latest live-action series follows its titular character in her endeavor to find Grand Admiral Thrawn following whispers of his return. The former Jedi's pursuit truly began in The Mandalorian season 2, when Ahsoka used a dark side power to retrieve the location of a star map from the Nightsister Morgan Elsbeth.",
        user_id: 1
    }
]

// Function to seed posts
const seedPosts = () => Post.bulkCreate(postData);

// Export the seedPosts function
module.exports = seedPosts;
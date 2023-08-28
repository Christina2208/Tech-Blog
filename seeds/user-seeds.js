// Importing/requiring the User model
const { User } = require('../models');

// Array of seeded user data
const userData = [
    {
        username: "Micheal_Murphy",
        email: "micheal_m@gmail.com",
        password: "password1!"
    },
    {
        username: "Kelly_Reid",
        email: "Kelly_R@gmail.com",
        password: "password12!"
    },
    {
        username: "ThomasGay12",
        email: "TGay12@gmail.com",
        password: "password123!"
    },
    {
        username: "StephanieRice3",
        email: "StephanieRice@gmail.com",
        password: "password1234!"
    },
]

// Function to seed users 
const seedUsers = () => User.bulkCreate(userData);

// Export the seedUsers function
module.exports = seedUsers;
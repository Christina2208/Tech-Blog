// Importing/requiring modules
const router = require("express").Router();
const { User, Post, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// Route to get all users
router.get("/", (req, res) => {
  User.findAll({
    //excluding passwords
    attributes: { exclude: ["password"] },
  })
    .then((dbUserData) => res.json(dbUserData))
    // catching error(s) and console logging error msg
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Route to get a single user by ID
router.get("/:id", (req, res) => {
  User.findOne({
    attributes: { exclude: ["password"] },
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Post,
        attributes: ["id", "title", "post_content", "created_at"],
      },
      {
        model: Comment,
        attributes: ["id", "comment_text", "created_at"],
        include: {
          model: Post,
          attributes: ["title"],
        },
      },
    ],
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user was found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    // catching error(s) and console logging error msg
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Route to create a new user
router.post("/", (req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  }).then((dbUserData) => {
    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;

      res.json(dbUserData);
    });
  });
});

// Route to log in a user
router.post("/login", (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((dbUserData) => {
    if (!dbUserData) {
      res
        .status(400)
        .json({ message: "No user was found with that email address!" });
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: "Wrong password!" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.twitter = dbUserData.twitter;
      req.session.github = dbUserData.github;
      req.session.loggedIn = true;

      res.json({ user: dbUserData, message: "You are now logged in!" });
    });
  });
});

// Route to log out a user
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// Route to update a user by ID
router.put("/:id", withAuth, (req, res) => {
  User.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData[0]) {
        res.status(404).json({ message: "No user was found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    // catching error(s) and console logging error msg
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Route to delete a user by ID
router.delete("/:id", withAuth, (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user was found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    // catching error(s) and console logging error msg
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Exporting the router
module.exports = router;

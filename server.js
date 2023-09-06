// Importing required dependencies
const path = require('path');
const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');

const helpers = require('./utils/helpers');

const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers });

const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3001; // Port for the application

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Tulip Fields', // Secret key for session data encryption
  cookie: {
        // Session will auto expire in 10 minutes
        expires: 10 * 60 * 1000
  },
  resave: true,
  rolling: true,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  }),
};

// Using the session middleware with the configured settings
app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(routes);

// Starting up the server and logging the message when it's running
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
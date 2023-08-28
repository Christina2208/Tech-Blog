// requiring/importing sequelize
const Sequelize = require('sequelize');

//requiring dotenv
require('dotenv').config();

let sequelize;

//connecting dotenv credentials to mysql/db
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
}

//exporting sequelize
module.exports = sequelize;
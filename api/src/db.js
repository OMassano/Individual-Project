require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_DEPLOY} = process.env;
const DogModel = require("./models/Dog");
const TempModel = require("./models/Temperament");

// const sequelize = new Sequelize(
//   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/dogs`,
//   {
//     logging: false, // set to console.log to see the raw SQL queries
//     native: false, // lets Sequelize know we can use pg-native for ~30% more speed
//   }
// );
const sequelize = new Sequelize(
  DB_DEPLOY,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);
//connects models to sequelize 
DogModel(sequelize);
TempModel(sequelize);

const { Dog, Temperament } = sequelize.models;

//Creates new table with relationship
Dog.belongsToMany(Temperament, { through: "dogtemperament" });
Temperament.belongsToMany(Dog, { through: "dogtemperament" });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};

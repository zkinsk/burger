var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

var Burgers = sequelize.define("burgers", {
  burger_name: {type: Sequelize.STRING, allowNull: false},
  devoured: {type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false},
});

// Syncs with DB
Burgers.sync();

module.exports = Burgers;



// CREATE TABLE burgers(
//   id INTEGER auto_increment,
//   burger_name VARCHAR(255) not null,
//   devoured BOOLEAN default false,
//   PRIMARY KEY(id)
//   );
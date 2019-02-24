const orm = require("../config/orm");


const burger = {
  all: function(callback) {
    orm.all("burgers", function(res) {
      callback(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, callback) {
    orm.create("burgers", cols, vals, function(res) {
      callback(res);
    });
  },
  update: function(objColVals, condition, callback) {
    orm.update("burgers", objColVals, condition, function(res) {
      callback(res);
    });
  },
  delete: function(condition, callback) {
    orm.delete("cats", condition, function(res) {
      callback(res);
    });
  }
};

module.exports = burger;
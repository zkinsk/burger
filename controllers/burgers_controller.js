var express = require("express");
var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    console.log(data);
    let burgersToEat = [];
    let burgersAte = [];
    data.forEach(function(burger){
      if (burger.devoured){burgersAte.push(burger)}else{burgersToEat.push(burger)};
    })
    // console.log(data);
    res.render("index", {title:"Eat Dat Burger", burgersToEat: burgersToEat, burgersAte: burgersAte});
  });
});

router.post("/api/burger", function(req, res) {
  // console.log(req.body);
  burger.create([
    "burger_name"
  ], [
    req.body.newBurger,
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.patch("/api/burger", function(req, res) {
  // console.log(req.body);
  let condition = "id = " + req.body.ateID;
  let cols = "devoured";
  let vals = true;

  burger.update(cols, vals, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/burger/", function(req, res) {
  burger.reset(function(result) {
      res.status(200).end();
  });
});

// Export routes for server.js to use.
module.exports = router;

var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {
  burger.all(function (data) {
    var burgersObj = {
      burgers: data
    };
    res.render("index", burgersObj);
  });
});

router.post("/api/burgers", function (req, res) {
  burger.insert(req.body, function (result) {
    res.send("Inserted");
  });
});

module.exports = router;

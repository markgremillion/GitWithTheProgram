var express = require("express");

var router = express.Router();

var db = require("../models");


router.get("/", function(req, res) {
    db.Restaurant.all({}).then(function(data) {
        console.log("hey im running")
        var hbsObject = {
            restaurant: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    })
});

module.exports = router;

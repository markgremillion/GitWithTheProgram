var express = require("express");

var router = express.Router();

var restaurants = require("../models/restaurants.js");


router.get("/", function(req, res) {
    restaurants.all(function(data) {
        var hbsObject = {
            restaurant: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});
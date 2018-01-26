var db  = require("../models");

// Create all our routes and set up logic within those routes where required.

module.exports = function(app){
  app.get("/api/restaurants", function(req, res) {
    db.Restaurant.findAll({}).then(function(dbRestaurant){
      console.log(dbRestaurant);
      res.json(dbRestaurant);
      //instead of loading json file, should be rendering the handlebar file
      // res.render("index",{
      //   Restaurant: dbRestaurant
      // });
    });
  });
  
  app.post("/api/restaurants", function(req, res) {
    db.Burger.create(req.body).then(function(dbBurger){
      res.json(dbBurger);
    })
  });
  
  app.put("/api/restaurants/:id", function(req, res) {
   db.Burger.update(
     req.body,{
      where:{
        id: req.params.id
      }
     }).then(function(dbBurger){
       res.json(dbBurger);
     })
  });
}


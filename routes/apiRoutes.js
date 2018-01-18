var db = require('../models')
// console.log(db, "this is db")
module.exports = function (app){
  app.post("/api/login", function (req, res) {

    console.log(req.body)
    console.log(req.session.user)

    var user = {}; //found 
    db.users.findOne({
      where: {
        email: req.body.email,
        password: req.body.password
      }
    })
      .then(function (dbData) {
        console.log(dbData)
        if (!dbData && typeof dbData === "object"){
          res.status(404).send("don hack me bro")
        }else{
          
          res.json(dbData);
        }
      });
  })


  app.post("/api/signUp", function (req, res) {
    console.log(req.body)
    db.users.create(req.body).then(function (dbData) {

      res.json(dbData);
    });
  });
}
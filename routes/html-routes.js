
var path = require("path")

module.exports = function(app){

    app.use(function(req, res){

        res.sendFile(path.join(__dirname, "/../public/index.html"))
        
    })
    app.get('/login', function(req, res){

        res.sendFile(path.join(__dirname, '/../public/login.html'))
    })
    app.get('/createAccount', function(req, res){

        res.sendFile(path.join(__dirname, '/../public/createAccount.html'))
    })
    app.get('/allFood', function(req, res){

        res.sendFile(path.join(__dirname, '/../public/allFood.html'))
    })

    app.get('/chinese', function(req, res){

        res.sendFile(path.join(__dirname, '/../public/chinese.html'))
    })

    app.get('/american', function(req, res){

        res.sendFile(path.join(__dirname, '/../public/american.html'))
    })
    app.get('/japanese', function(req, res){

        res.sendFile(path.join(__dirname, '/../public/japanese.html'))
    })

    app.get('/vietnamese', function(req, res){

        res.sendFile(path.join(__dirname, '/../public/vietnamese.html'))
    })
    app.get('/italian', function(req, res){

        res.sendFile(path.join(__dirname, '/../public/italian.html'))
    })
    app.get('/sushi', function(req, res){

        res.sendFile(path.join(__dirname, '/../public/sushi.html'))
    })
    app.get('/other', function(req, res){

        res.sendFile(path.join(__dirname, '/../public/other.html'))
    })




}
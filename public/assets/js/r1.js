$(document).ready(function () {

    
        $("#r1").on("click", function (event) {
            event.preventDefault();

            console.log("r1 got clicked!")

            $.get("/api/restaurants",function(req,res){
                console.log(req.body);
                
            })

        })


})



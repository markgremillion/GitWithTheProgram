$(document).ready(function () {
    console.log("hi");
    
        $("#r1").on("click", function (event) {
            event.preventDefault();

            console.log("r1 got clicked!")

            $.get("/api/restaurants").then(function(response){
                console.log(response);
                console.log(response[0].name);

                var res = response.stringify();

                document.body.innerHTML = res;

                $.get("../../r1.html")
                $("#name").text(response[0].name);
                $("#address").text(response[0].address); 
                
            })

        })


})
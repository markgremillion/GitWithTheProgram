$(document).ready(function () {
 

            $.get("/api/restaurants").then(function(response){
                // debugger;
                // console.log(response);
                // document.getElementById("test").value = response[0].name;
                $("#name").text(response[0].name);
                $("#address").text(response[0].address);
                $("#type").text(response[0].typeOfFood);
                $("#rate").text(response[0].rate);
                $("#price").text(response[0].price);
                
                

                
            })


})
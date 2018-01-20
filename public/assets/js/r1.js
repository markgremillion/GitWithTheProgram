$("#r1").on("click",function(event){
    event.preventDefault();
    $.get("/api/restaurants",function(data){
        if(data.length !== 0){
            for (var i = 0; i < data.length; i++) {
                var row = $("<div>");
                row.append("<p>"+data[i].name+"</p>");
            }
        }
    })
})
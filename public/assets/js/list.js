$(function(){
    $(".addItem").on("submit",function(event){
        event.preventDefault();
        var newItem ={
            activity: $("#newItem").val().trim(),
            crossed: 0
        };

        $.ajax("/api/blist",{
            type: "POST",
            data: newItem
        }).then(function(){
            //console.log("created new list item");
            location.reload();
        })
    });

    $(".crossItem").on("click", function(event){
        var id = $(this).data("id");
        var Stat = $(this).data("newstat");
        if (Stat) {
            var newStat = false;
        } else {
            var newStat = true;
        }
        var crossedOff = {
            col: "crossed_off",
            val: newStat
        };

        $.ajax("/api/blist/" + id ,{
          type: "PUT",
          data: crossedOff  
        }).then(function(){
            //console.log("Changed itemID " + id + " to " + newStat)
            location.reload();
        })


    })
    $(".deleteItem").on("click", function(event){
        var id = $(this).data("id");
        $.ajax("/api/blist/" + id ,{
          type: "DELETE"
        }).then(function(){
            //console.log("Deleted itemID " + id)
            location.reload();
        })


    })
})
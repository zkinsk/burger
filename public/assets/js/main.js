
const buttons = () => {
  $("button[type=submit]").click(function(event){
    event.preventDefault();
    let newBurger = $("#burger-type").val().trim()
    $.post("/api/burger", {newBurger: newBurger}, function(res){
      console.log(res);
      location.reload();
    })
  })//end submit button

  $(".devourButton").click(function(){
    let btID = $(this).attr("data-id");
    console.log("click: " + btID)
    $.ajax({
      url: "/api/burger",
      type: "PATCH", 
      data: {ateID: btID},
    }).then( function(res){
      console.log(res);
      location.reload();
    });
  })//end devour button

  $("#resetButton").click(function(){
    console.log("reset");
    $.ajax({
      url: "/api/burger",
      type: "DELETE", 
    }).then( function(res){
      console.log(res);
      location.reload();
    });
  })//end reset button
}//end buttonsfn




$(document).ready(function(){
  buttons();
})//end of doc ready

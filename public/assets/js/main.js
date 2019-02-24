
const buttons = () => {
  $("button[type=submit]").click(function(even){
    event.preventDefault();
    let newBurger = $("#burger-type").val().trim()
    $.post("/api/burger", {newBurger: newBurger}, function(res){
      console.log(res);
    })
  })
}




$(document).ready(function(){
  buttons();
})//end of doc ready
$(document).ready(function () {

  $("#submit").on("click", function (event) {
    event.preventDefault();
    var newBurger = {
      burger_name: $("#burger").val().trim()
    };
    $("#burger").val("");
    console.log(newBurger);
    $.ajax("/api/burgers", {
      type:"POST",
      data: newBurger
    }).then(function () {
      console.log("new burger");
      location.reload();
    });
  });

});

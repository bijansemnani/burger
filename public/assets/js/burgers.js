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

  $(".change-devoured").on("click", function (event) {
    event.preventDefault();
    var id = $(this).data("id");
    var newBurger = {
      devoured: 1
    };
    $.ajax("/api/burgers/"+id, {
      type: "PUT",
      data: newBurger
    }).then(function () {
      console.log("burger updated");
      location.assign("/");
    });
  });

});

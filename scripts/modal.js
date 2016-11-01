$(document).ready(function(){

  // open modal on load
  $("#openModal").trigger("click");

  $("form#selectModalOption").on("submit",function(e){
      e.preventDefault();
      $(".close").trigger("click");
      window.location.href = "/draganddrop2/pages/main.php?id=createNew";
  });
});

$(document).ready (function() {
  $.ajax({
      method: "GET",
      url: "http://localhost/draganddrop2/php/get.php",
      dataType:"html"
  })
  .done(function( data ) {
        $("#template .wrapper").html(data);
  });

});

$(document).ready (function() {
  var id = $("#hidden_id").val();
  if(id != "createNew"){
    $.ajax({
        method: "GET",
        url: "http://localhost/draganddrop2/php/get.php?id="+id,
        dataType:"html"
    })
    .done(function( data ) {
          console.log(data);
          $("#template .wrapper").html(data);
    });
  }

});

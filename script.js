$(document).ready (function() {

  	$( "#side_bar img" ).draggable();

  	// drop image to image_area
  	$( "#template .image_area" ).droppable({
  		drag: function( event, ui ) {
  			$( this ).addClass( "background-highlight" );
  		},
	    drop: function( event, ui ) {
	        event.stopPropagation();
  			event.preventDefault();
  			$(".image_area").html(ui.draggable["context"]);
	    }
      
    });

    // click on image container to open file
    $(".image_area").click(function(){
    	$("#user_image").click();
    });



    // display image in image_area
    $("#user_image").change(function(event){
    	var readFile = new FileReader();
    	console.log(readFile);
    	readFile.onload = function(event){
    		$(".image_area img").attr('src',event.target.result);
    	}
    	readFile.readAsDataURL(event.target.files[0]);

    });



    // submit form after uploading image and text

    $('form#template').submit(function(event){
    	event.preventDefault();
    	console.log("form submitted");
    	console.log($("textarea[name='user_text']").val());
    	/*
    	var formData={
    		image: "image",
    		text : $("textarea[name='user_text']").val()

    	};
    	*/
    	console.log(new FormData(this));
    	console.log("submit completed");

    });
  
});





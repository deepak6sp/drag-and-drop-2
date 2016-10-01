$(document).ready (function() {

	$(".panel").draggable({helper: "clone",
		revert: true,
		start: function( event, ui ) {
		}
	});


	$( "#template" ).droppable({
      	accept: ".row",
		drop: function(event,ui){
				$(".wrapper .initialRow").remove();
				$(".wrapper").append($(ui.draggable).clone());
				$(".wrapper .row").droppable({
					accept: ".columns",
					drop: function(event,ui){
						//$(this).html("");
						$(this).append($(ui.draggable).clone());
						$(".wrapper .columns").html("add modules");
					}
				});
				$(".wrapper .row").html("add column");
			}
    });
});


function make_droppable() {
    // a lots of line with several function
}
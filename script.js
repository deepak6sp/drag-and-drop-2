$(document).ready (function() {
	$("#side_bar .panel").draggable({
		helper: "clone",
		revert: true
	});


	$( "#template" ).droppable({
      	accept: ".row",
		drop: function(event,ui){
				$(".wrapper .initialRow").html("");
				$($(ui.draggable).clone()).insertBefore(".wrapper .initialRow");
				$(".initialRow").prev().html("");
				
				$(".wrapper .row").droppable({
					accept: ".columns",
					drop: function(event,ui){
						$(this).prepend($(ui.draggable).clone());
						//$(".wrapper .columns").html("add modules");
					}
				});
				//$(".wrapper .row").html("add column");
		}

    });

});

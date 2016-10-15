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
					$(this).append($(ui.draggable).clone());

					$(".wrapper .columns").droppable({
						accept: ".addText,.addImage",
						drop: function(event,ui){
							$(this).find(".columnText").html("");
							$(this).prepend($(ui.draggable).clone());
							$(this).find(".addText").html("<textarea />");
							$(this).find(".addImage").html("<input type='file' name='pic' />");
						}
					});

				}
			});
		}

    });

});

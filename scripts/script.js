
$(document).ready (function() {
  /* left side bar control panel*/
  $("#side_bar .panel").draggable({
      helper: "clone",
      revert: true
  });

  // unselect everything and close settings panel
  $("#template").on("click",function(e){
  	e.stopPropagation();
  	$(".panel").removeClass("selectedDiv");
    hideSettingsPanelAttribute();
  });
  /*actual control panel that use for template export*/
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
              $(this).find(".addText").html("<textarea onblur='textToLabel(this)' class='useOnSave' />");
              $(this).find(".addImage").html("<input class='image' type='file' name='pic' onchange='inputToImage(this)' />");

              // add selectedDiv class on div selection click
						  componenentSelection();
            }

          });
          // add selectedDiv class on div selection click
			  	componenentSelection();
        }

      });
     // add selectedDiv class on div selection click
	  	componenentSelection();
    }
  });

  // look for .selectedDiv class and delete
  $(".deleteSelection").on("click", function(){
  	$("#template .selectedDiv").remove();
  	hideSettingsPanelAttribute();
  });

  $(".addImage").resizable();

});

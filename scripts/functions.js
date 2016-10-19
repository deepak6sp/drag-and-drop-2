// template div selection
function componenentSelection(){
	$(".addImage").addClass("ui-resizable");
	$("#template .panel").on("click",function(e){
  	e.stopPropagation();
  	$(".panel").removeClass("selectedDiv");
		$(this).addClass("selectedDiv");
		showSettingsPanelAttributes();
	});
}

// show settings panel attribute on div selection
function showSettingsPanelAttributes(){
	$(".settingsPanel div").show();
	$(".deleteSelection").hide().show(200);
}

// hide  setting panel after action is done
function hideSettingsPanelAttribute(){
	$(".settingsPanel div").hide();
}

function textToLabel(pointer) {
  //replace the textarea to text it can be to any text with any formate
  $(pointer).parent().html("<div onclick='labelToText(this)' class='useOnSave'>" + pointer.value + "</div>");
}

function labelToText(pointer) {
  // convert from div to textarea
  $(pointer).parent().html("<textarea onblur='textToLabel(this)' class='useOnSave'>" + $(pointer).text() + "</textarea>");
}

//input type file  to image
function inputToImage(pointer) {
  var reader  = new FileReader();
  var file = pointer.files[0];
  reader.addEventListener("load", function () {
     $(pointer).parent().html("<img src='" + reader.result + "'/>");
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}

// onclick on image will change from image to input
function imageToInput(pointer) {
  $(pointer).parent().html("<input class='image' type='file' name='pic' onchange='inputToImage(this)' />");
}

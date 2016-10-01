$(document).ready (function() {

  // do not submit form on enter press
  $(window).keydown(function(event){
    if(event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });
  
  //var numberOfColumns = 1;

  // add row on click
  $(".addRow").on("click",function(e){
    addRow(e);
  });

  //delete row
  $("#template").on("click",".row .deleteRow", function(e){
    deleteRow(e);
  });

  // select row on click
  $("#template").on("click",".row",function(e){
    selectRow(e);
  });

  // add column on click
  $(".addColumn").on("click",function(e){
    addColumns(e);
  });
  

  

  // add text 
  $("#textObject").on('click',function(){



  });

  /*
  // drag and drop text
  $(".addObject").draggable({
      revert: "valid",
      drag: function(event,ui){
        if (!$('.column').hasClass('ui-droppable')){
          alert("select column to drop");
        }
      }

  });

  // highlight or select column 
  var droppableDiv = $("<div></div>");
  $("#template").on("click",".column",function(e){
    $("#template .column").removeClass("active ui-droppable");
    $(e.target).addClass("active ui-droppable");
    droppableDiv = $(e.target).context;
    $(droppableDiv).droppable({
      drop: function(event, ui) {
        if (ui.draggable.attr("id") == "textObject"){
          $(this).append('<textarea type="text" name="textbox" id="textbox" value="" />');
        } else if (ui.draggable.attr("id") == "imageObject"){
          var image='<img class="image_area" src="1.jpg" >';
          $(this).append(image);
        } else {
          alert("drag text or image from panel");
        }

      }
    });
  });
  */
});

$("#template textarea").resizable();
$("#template img").resizable();



function addRow(){
      $(".initialRow").remove();
      $(".row").removeClass("active");
      $(".inner").append('<div class="row active"><span>click Add columns button</span><div class="deleteRow">x</div></div> ');
      //numberOfRows++;
      $("#template .inner").sortable();
      //$("#template .inner").disableSelection();
}

function deleteRow(e){
    if(confirm("Are you sure you want to delete row ?")){
      $(e.target).closest(".row.active").prev(".row").addClass("active");
      $(e.target).closest(".row.active").remove();
      //numberOfRows--;
    }
}

function selectRow(e){
    $(e.target).closest(".row").addClass("active");
    $(e.target).closest(".row").prev(".row.active").removeClass("active");
    $(e.target).closest(".row").next(".row.active").removeClass("active");
}

function addColumns(e){
    // add columns on click based on conditions
    var selectedNumber =  prompt("Type columns between 1 to 4");
    var numOfColumns = parseInt(selectedNumber);
    while (selectedNumber > 4 || selectedNumber == "undefined" || selectedNumber == ""){
      selectedNumber =  prompt("You can select max of 4 columns. Type columns between 1 to 4");
      numOfColumns = parseInt(selectedNumber);
    }
    var columnClass = "col-md-"+Math.trunc(12/numOfColumns);
    var columnDivs = calcColumn(numOfColumns,columnClass);
    if (!$('.row.active div').hasClass('column')){
      $(".row.active").append(columnDivs);
      $(".row.active span").remove();
      $(".row.active").sortable();
      //$(".row").removeClass("active");
    } else {
      alert("columns already exist in this row");
    }
}

function calcColumn(numOfColumns,columnClass){
    var columnDivs = [];
    var columnHasActive = "";
    for(var i =1; i<= numOfColumns; i++){
      /* add active class to every first column of the row by default
      if (i == 1){
        columnHasActive = " active ui-droppable ";
      } else {
        columnHasActive = " ";
      }*/
      var columns = "<div class='column "+columnClass+columnHasActive+"'>column </div>";
      columnDivs.push(columns);
    }
    return columnDivs;
}





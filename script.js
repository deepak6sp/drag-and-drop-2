$(document).ready (function() {
  // add row on click
  var numberOfRows = 1;
  $(".addRow").on("click",function(){
    if(numberOfRows >4){
      alert("you have reached rows limit");
    } else {
      $(".row").removeClass("active");
      $(".inner").append('<div class="row active"><div class="deleteRow">x</div></div> ');
      numberOfRows++;
    }
  });


  // delete row
  $("#template").on("click",".deleteRow", function(e){
    if(confirm("Are you sure you want to delete row ?")){
      $(e.target).closest(".row").remove();
      numberOfRows--;
    }
    
  });

  // highlight row on click
  $("#template").on("click",".row",function(e){
    $(".row").removeClass("active");
    $(e.target).closest(".row").addClass("active");
  });

  // add column on click based on conditions
  $(".addColumn").on("click",function(){
  
    var selectedNumber =  prompt("Type columns between 1 to 12");
    var numOfColumns = parseInt(selectedNumber);
    while (selectedNumber > 12 || selectedNumber == "undefined" || selectedNumber == ""){
      selectedNumber =  prompt("Type columns between 1 to 12");
      numOfColumns = parseInt(selectedNumber);
    }

    var columnClass = "col-md-"+Math.trunc(12/numOfColumns);
    var columnDivs = addColumns(numOfColumns,columnClass);
   
    if (!$('.row.active div').hasClass('column')){
      $(".row.active").append(columnDivs);
      $(".row").removeClass("active");
    } else {
      alert("columns already exist in this row");
    }
  });

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
    console.log(droppableDiv);
    $(droppableDiv).droppable({
      drop: function(event, ui) {
        if (ui.draggable.attr("id") == "textObject"){
          $(this).append('<input type="text" name="textbox" id="textbox" value="" >');
        } else if (ui.draggable.attr("id") == "imageObject"){
          var image='<img class="image_area" src="1.jpg" >';
          $(this).append(image);
        } else {
          alert("drag text or image from panel");
        }

      }
    });
    
  });

  
  
});

function addColumns(numOfColumns,columnClass){
    var columnDivs = [];
    for(var i =1; i<= numOfColumns; i++){
      var columns = "<div class='column "+columnClass+"'>column </div>";
      columnDivs.push(columns);
    }
    return columnDivs;
}




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
  
});

function addColumns(numOfColumns,columnClass){
    var columnDivs = [];
    for(var i =1; i<= numOfColumns; i++){
      var columns = "<div class='column "+columnClass+"'>column </div>";
      columnDivs.push(columns);
    }
    return columnDivs;
}




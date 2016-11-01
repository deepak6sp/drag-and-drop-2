<?php include 'mysql.php';

$id = $_GET['id'];

if($id != "createNew"){
  $sql = "SELECT id, structure FROM templates where id=$id";
  $result = $conn->query($sql);
  //$rows = array();

  if ($result->num_rows > 0) {
      // output data of each row
      while($row = $result->fetch_assoc()) {
          //echo "id: " . $row["id"]. " <br> structure: " . $row["structure"]. "<br>";
          //$rows[] = $row;
          $rowStructure = $row["structure"];
      }
  } else {
      echo "0 results";
  }
  echo $rowStructure;
}

$conn->close();

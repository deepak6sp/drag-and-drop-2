<?php include 'mysql.php';

$id =  $_POST['id'];
$structure = "'".$_POST['structure']."'";
//echo $structure;

// check record already exist
$getSql = "SELECT id FROM templates where id=$id";
$result = $conn->query($getSql);

if ($result->num_rows > 0) {
  $postSql = "UPDATE templates SET structure=$structure WHERE id=$id";
  if ($conn->query($postSql) === TRUE) {
      echo "Record updated successfully";
  } else {
      echo "Error: " . $sql . "<br>" . $conn->error;
  }
} else {
  $postSql = "INSERT INTO `templates`(`structure`) VALUES ($structure)";
  if ($conn->query($postSql) === TRUE) {
      echo "New record created successfully";
  } else {
      echo "Error: " . $sql . "<br>" . $conn->error;
  }
}

$conn->close();

<?php include 'mysql.php';

$id =  $_POST['id'];
$structure = "'".$_POST['structure']."'";
//echo $structure;

$sql = "INSERT INTO `templates`(`id`, `structure`) VALUES ($id,$structure)";
if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

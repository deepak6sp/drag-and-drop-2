<?php include 'mysql.php';

$sql = "SELECT id, structure FROM templates where id='1'";
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
//echo json_encode($rowStructure);
//$json_row = json_encode($rowStructure);
//echo htmlspecialchars($json_row);

$conn->close();

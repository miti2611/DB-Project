<?php

include_once("DBconnect.php");

$query = "select pname, powner, post_time, count(updateid) as comments, count(likes.username) as likes
			from (project left outer join comments on project.pid = comments.pid) left outer join likes on project.pid=likes.pid
			group by pname, powner, post_time
			limit 5;";

$result = $conn->query($query);
if ($result->num_rows > 0) {
	//echo "<br> The following are the products that currently cannot be ordered: <br>";
	while($row = $result->fetch_assoc()) {    
//		echo "Pname: " . $row['pname']. "powner: ". $row["powner"]. "comments: ". $row["comments"]. " likes: ". $row["likes"]. "<br>";
	$r[] = $row;
	}
}
 
echo json_encode($r);

?>
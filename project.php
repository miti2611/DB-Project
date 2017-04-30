<?php

include_once("DBconnect.php");

$query = "select pname, powner, post_time, count(updateid) as comments, count(likes.username) as likes
			from (project left outer join comments on project.pid = comments.pid) left outer join likes on project.pid=likes.pid
			where project.pid = '1' or project.pid = '2'
			group by pname, powner, post_time;";

$result = conn->query($query);

echo json_encode($result);

?>
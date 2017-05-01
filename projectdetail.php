<?php
include_once("DBconnect.php");
$pname = $_GET["title"];

$query = "select pname, pdesc, powner, date(post_time) as ptime, count(updateid) as comments, count(likes.username) as likes
			from (project left outer join comments on project.pid = comments.pid) left outer join likes on project.pid=likes.pid
			where pname = '{$pname}'
			group by pname, powner, post_time;";
			
			
$result = $conn->query($query);


if ($result->num_rows > 0) {
	//echo "<br> The following are the products that currently cannot be ordered: <br>";
	while($row = $result->fetch_assoc()) {    
	
	$title = $row['pname'];
	$desc = $row['pdesc'];
	$owner = $row['powner'];
	$pdate = $row['ptime'];	
	
	}
}
				
?>

<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>


<style>
.row
{
	margin-left:15px;
}
</style>  
  
  
</head>

<body>
<!--<form action = project.php>
<input type=submit>
</form>-->

<div class="row">
  <div class="span8">
    <div class="row">
      <div class="span8" >
        <h4><strong><a href="#"><?php echo $title ?></a></strong></h4>
      </div>
    </div>
    <div class="row">
      <div class="span2">
        <a href="#" class="thumbnail">
            <img id = "image" src="http://placehold.it/260x180" alt="No photo">
        </a>
      </div>
      <div class="span6">      
        <p>
         	<?php echo $desc ?>
		  </p>
       <!-- <p><a href="#">Read more</a></p> -->
      </div>
    </div>
    <div class="row">
      <div class="span8">
        <p></p>
        <p>
          <i class="icon-user"></i> by <a href="#"><?php echo $owner ?></a> 
          | <i class="icon-calendar" ><?php echo $pdate ?></i> 
          | <i class="icon-comment"></i> <a id = "comments0" href="#"></a>
          | <i class="icon-share"></i> <a id = "likes0" href="#"></a>
          | <i class="icon-tags"></i> Tags : <a href="#"><span class="label label-info">Snipp</span></a> 
          <a href="#"><span class="label label-info">Bootstrap</span></a> 
          <a href="#"><span class="label label-info">UI</span></a> 
          <a href="#"><span class="label label-info">growth</span></a>
        </p>
      </div>
    </div>
  </div> 
</div>

</body>
</html>
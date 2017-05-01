function displayProject(projectData) {
	
	for (var j = 0; j < projectData.length; j++) {
		var rowData = projectData[j];
		document.getElementById("title"+j).innerHTML = rowData['pname'];
		var title = rowData['pname'];
		$("#title"+j).bind('click', {id: title}, function(event) {
			var data = event.data;
			console.log(data.id);
			window.location.href="projectdetail.php?title="+data.id;
		});
		
		document.getElementById("owner"+j).innerHTML = rowData['powner'];
		document.getElementById("time"+j).innerHTML = rowData['ptime'];
		document.getElementById("comments"+j).innerHTML = rowData['comments']+" Comments";
		var comments = rowData['comments'];
		$("#comments"+j).bind('click', {id: title}, function(event) {
			var data = event.data;
			console.log(data.id);
			
			window.location.href="projectdetail.php?title="+data.id;
			
		});
		document.getElementById("likes"+j).innerHTML = rowData['likes']+" Likes";
		$("#likes"+j).bind('click', {id: title}, function(event) {
			var data = event.data;
			console.log(data.id);
			window.location.href="projectdetail.php?title="+data.id;
		});
		
	}
     	
}	



$.ajax({
type: "POST",
dataType: "json",
url: "project.php",
success: function(data) {
displayProject(data);
}
});


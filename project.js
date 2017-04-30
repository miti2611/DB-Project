/*function fillInstructions() {
var commentTop = $($('.comment')[0]);
var text = "Comments other users have made about this document are shown in yellow boxes like this one the left and right sides of the page."
commentTop.html('<div class="comment-holder left"><div class="user-comment">'+text+'</div></div><div class="comment-holder right"></div>');
}

fillInstructions();*/


function displayProject(projectData) {
	
	for (var j = 0; j < projectData.length; j++) {
		var rowData = projectData[j];
		//console.log('ProjectData');
		//console.log(rowData);
		console.log(rowData['pname']);
		document.getElementById("title"+j).innerHTML = rowData['pname'];
		document.getElementById("owner"+j).innerHTML = rowData['powner'];
		document.getElementById("time"+j).innerHTML = rowData['post_time'];
		document.getElementById("comments"+j).innerHTML = rowData['comments'];
		document.getElementById("likes"+j).innerHTML = rowData['likes'];
		
		//document.getElementById("title")[0].html(rowData['pname']);
		//document.getElementsById("title")[1].setAttribute("href", rowData['pname']);
		/*$('#title').html(rowData['pname']);
		$('#owner').html(rowData['powner']);
		$('#time').html(rowData['post_time']);
		$('#comments').html(rowData['comments']);
		$('#likes').html(rowData['likes']);*/
		
		
	/*//	var text_to_iterate = $('<div class="span8"></div>');
		var pro_title_row = document.createElement("div");
		pro_title_row.setAttribute  $('<div class="row"> </div>');
		//var pro_img_row=$('<div class="row"> </div>');
		var pro_owner_row=$('<div class="row"> </div>');
		var pro_time_row=$('<div class="row"> </div>');
		var pro_comments_row=$('<div class="row"> </div>');
		var pro_likes_row=$('<div class="row"> </div>');
		//var pro_tags_row=$('<div class="row"> </div>');
		
		var title = $('<div class="span8"><h4><strong><a href="#">'+rowData['pname']+'</a></strong></h4></div>');
	   // var title = $('<div class="span2"><h4><strong><a href="#">'+rowData['pname']+'</a></strong></h4></div>');
		var owner = $('<div class="span2"><h4><strong><a href="#">'+rowData['powner']+'</a></strong></h4></div>');
		var post_time = $('<div class="span2"><h4><strong><a href="#">'+rowData['post_time']+'</a></strong></h4></div>');
		var comments = $('<div class="span2"><h4><strong><a href="#">'+rowData['comments']+'</a></strong></h4></div>');
		var likes = $('<div class="span2"><h4><strong><a href="#">'+rowData['likes']+'</a></strong></h4></div>');
		//var tags = $('<div class="span2"><h4><strong><a href="#">'+rowData['tags']+'</a></strong></h4></div>');
		pro_comments_row.append(comments);
		pro_likes_row.append(likes);
		pro_time_row.append(post_time);
		pro_owner_row.append(owner);
		pro_title_row.append(title);
		$('.project').html('');
		$('.project').append(pro_comments_row + pro_likes_row + pro_time_row + pro_owner_row + pro_title_row);*/
	}
     	
}	
	
/*	
var title = $('.pname');
console.log(commentData);
for (var i = 1; i < comments.length; i++) {
var answer = 'answer' + i;
var comment = $(comments[i]);
var commentNum = commentData.length;
if (commentNum > 5) commentNum = 5;
var commentHolder = $('<div class="comment-holder left"></div><div class="comment-holder right"></div>');

var commentsArray = [];
for (var j = 0; j < commentNum; j++) {
if (commentData[j]) {
var text = commentData[j][answer];
if (text.length > 0) {
if (text.length > 1000) {
text = text.substring(0, 1000) + "...";
}
commentsArray.push(text);
}
}
}
for (var j = 0; j < commentsArray.length; j++) {
var text = commentsArray[j];
if (j < 3) {
var userComment = $('<div class="user-comment">'+text+'</div>');
var leftHolder = $(commentHolder[0]);
leftHolder.append(userComment);
} else {
var userComment = $('<div class="user-comment">'+text+'</div>');
var rightHolder = $(commentHolder[1]);
rightHolder.append(userComment);
}
}
comment.html('');
comment.append(commentHolder);
}
}*/

$.ajax({
type: "POST",
dataType: "json",
url: "project.php",
//data: {'pname':pname, 'powner':powner, 'post_time':post_time, 'comments':comments, 'likes':likes},
success: function(data) {
displayProject(data);
//console.log('data');
//console.log(data);

}
});



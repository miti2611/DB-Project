/*function fillInstructions() {
var commentTop = $($('.comment')[0]);
var text = "Comments other users have made about this document are shown in yellow boxes like this one the left and right sides of the page."
commentTop.html('<div class="comment-holder left"><div class="user-comment">'+text+'</div></div><div class="comment-holder right"></div>');
}

fillInstructions();*/

function displayProject(projectData) {
	
	for (var j = 0; j < projectData.length; j++) {
		var rowData = projectData[j];
		console.log('ProjectData');
		console.log(rowData);
		console.log(rowData['pname']);
	}
}
	/*
	for (var i=)
	var title = 
	
	var text_to_iterate = "<div class="span8">
    <div class="row">
      <div class="span8">
        <h4><strong><a href="#">Title of the post</a></strong></h4>
      </div>
    </div>
    <div class="row">
      <div class="span2">
        <a href="#" class="thumbnail">
            <img src="http://placehold.it/260x180" alt="No photo">
        </a>
      </div>
      <div class="span6">      
        <p>
          Project desc	
		  </p>
        <p><a href="#">Read more</a></p>
      </div>
    </div>
    <div class="row">
      <div class="span8">
        <p></p>
        <p>
          <i class="icon-user"></i> by <a href="#">Mark</a> 
          | <i class="icon-calendar"></i> Sept 16th, 2012
          | <i class="icon-comment"></i> <a href="#">3 Comments</a>
          | <i class="icon-share"></i> <a href="#">39 Likes</a>
          | <i class="icon-tags"></i> Tags : <a href="#"><span class="label label-info">Snipp</span></a> 
          <a href="#"><span class="label label-info">Bootstrap</span></a> 
          <a href="#"><span class="label label-info">UI</span></a> 
          <a href="#"><span class="label label-info">growth</span></a>
        </p>
      </div>
    </div>
  </div>"
	
	
	
	
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
console.log('data');
console.log(data);

}
});
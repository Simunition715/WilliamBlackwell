$(document).ready(function(){

	$("#scroll").mouseenter(function(){
	$("#scroll").html("Scroll Down");
	$("#scroll").css("color","red");	
	})

	$("#content").mouseenter(function(){
	$("#title").css("color","white");
	$("#info").css("color","white");
	$("#content").css("background-color","black");	
	$("body").css("background-color","black");
	$("#cover").css("background-color","black");
	})
})
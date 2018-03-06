//A function that will let users search pictures based on picture captions

var $gallery1 = "$('.gallery1')";



$(".searchBox").focus().change().keyup(function(){
for (i = 0; i < 12; i++){		
	
	
	var captionText = String( $("a:eq(" + i + ")").attr("title") ).toLowerCase();
    var checkText = ($(".searchBox").val().toLowerCase() );
	//console.log("checkText: " + checkText);
	//console.log("captionText: " + captionText);
	
	if(captionText.indexOf(checkText)==-1){		  
		$("img:eq(" + i + ")").hide();		
		console.log("true");
	}else{
		$("img:eq(" + i + ")").show();
		console.log("false");
	}
	

}
});
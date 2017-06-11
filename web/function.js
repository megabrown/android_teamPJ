/*
jQuery(document).ready(function($) {	//html과 script가 준비된 시점
        $("#hm").click(function(event){           
                event.preventDefault(); //원래 실행될 기능 중지
                $('html,body').animate({scrollTop:$('#home').offset().top}, 900);
        });		//html body의 top을 offset으로 얻은 위치까지 스크롤 이동, 시간 900
});
*/

/*
var count = 0;
$("#dream1").click(function(event)){
	event.preventDefault();
	if(count==1){  
		$("#dream1.img").src="dream2.gif";
		$("#dream2.img").src="dream1.jpg";
	}
	else{
		$("#dream1.img").src="dream1.jpg";
		$("#dream2.img").src="dream2.gif";
	}
}
*/

var count = 0;
function toggleImg(){
	var img1 = document.getElementsById("dream1");
	var img2 = document.getElementsById("dream2");
	
	if( (count%2) == 1){
		img1.src="dream-1play.gif";
		img2.src="dream.jpg";
		count--;
	}
	else{
		img1.src="dream.jpg";
		img2.src="dream-1play.gif";
	}
	count++;
}
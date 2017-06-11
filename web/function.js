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

var count = 1;
function toggleImg(){
	var trans1 = document.getElementById("dream1");
	var trans2 = document.getElementById("dream2");
	
	if( (count%2) == 1){
		trans1.src="dream-1play.gif";
		trans2.src="dream.jpg";
		count--;
	}
	else{
		trans1.src="dream.jpg";
		trans2.src="dream-1play.gif";
	}
	count++;
}


var num1 = 1;
var num2 = 1;
var num3 = 1;
var num4 = 1;
var num5 = 1;
var num6 = 1;
var num7 = 1;
var num8 = 1;
var num9 = 1;
var num10 = 1;
var num11 = 1;
var num12 = 1;

function toggleTableAll(){
	if((num1%2)==1 && (num2%2)==1 && (num3%2)==1 && (num4%2)==1 && (num5%2)==1 && (num6%2)==1 && (num7%2)==1 && (num8%2)==1 && (num9%2)==1 && (num10%2)==1 && (num11%2)==1 && (num12%2)==1){
		num1 = 0;
		num2 = 0;
		num3 = 0;
		num4 = 0;
		num5 = 0;
		num6 = 0;
		num7 = 0;
		num8 = 0;
		num9 = 0;
		num10 = 0;
		num11 = 0;
		num12 = 0;
	}
}


function toggleTable1(){
	var img1 = document.getElementById("avignon1");
	var tmp1 = document.getElementById("temp1");
	
	if( (count%2) == 1){
		img1.src="dream-1play.gif";
		img2.src="dream.jpg";
		count--;
	}
	else{
		img1.src="dream.jpg";
		img2.src="dream-1play.gif";
	}
	num1++;
}

function toggleTable2(){
	var img2 = document.getElementById("avignon2");
	var tmp2 = document.getElementById("temp2");
	
	if( (count%2) == 1){
		img1.src="dream-1play.gif";
		img2.src="dream.jpg";
		count--;
	}
	else{
		img1.src="dream.jpg";
		img2.src="dream-1play.gif";
	}
	num1++;
}

function toggleTable3(){
	var img3 = document.getElementById("avignon3");
	var tmp3 = document.getElementById("temp3");
	
	if( (count%2) == 1){
		img1.src="dream-1play.gif";
		img2.src="dream.jpg";
		count--;
	}
	else{
		img1.src="dream.jpg";
		img2.src="dream-1play.gif";
	}
	num1++;
}

function toggleTable4(){
	var img4 = document.getElementById("avignon4");
	var tmp4 = document.getElementById("temp4");
	
	if( (count%2) == 1){
		img1.src="dream-1play.gif";
		img2.src="dream.jpg";
		count--;
	}
	else{
		img1.src="dream.jpg";
		img2.src="dream-1play.gif";
	}
	num1++;
}

function toggleTable5(){
	var img5 = document.getElementById("avignon5");
	var tmp5 = document.getElementById("temp5");
	
	if( (count%2) == 1){
		img1.src="dream-1play.gif";
		img2.src="dream.jpg";
		count--;
	}
	else{
		img1.src="dream.jpg";
		img2.src="dream-1play.gif";
	}
	num1++;
}

function toggleTable6(){
	var img6 = document.getElementById("avignon6");
	var tmp6 = document.getElementById("temp6");
	
	if( (count%2) == 1){
		img1.src="dream-1play.gif";
		img2.src="dream.jpg";
		count--;
	}
	else{
		img1.src="dream.jpg";
		img2.src="dream-1play.gif";
	}
	num1++;
}

function toggleTable7(){
	var img7 = document.getElementById("avignon7");
	var tmp7 = document.getElementById("temp7");
	
	if( (count%2) == 1){
		img1.src="dream-1play.gif";
		img2.src="dream.jpg";
		count--;
	}
	else{
		img1.src="dream.jpg";
		img2.src="dream-1play.gif";
	}
	num1++;
}

function toggleTable8(){
	var img8 = document.getElementById("avignon8");
	var tmp8 = document.getElementById("temp8");
	
	if( (count%2) == 1){
		img1.src="dream-1play.gif";
		img2.src="dream.jpg";
		count--;
	}
	else{
		img1.src="dream.jpg";
		img2.src="dream-1play.gif";
	}
	num1++;
}

function toggleTable9(){
	var img9 = document.getElementById("avignon9");
	var tmp9 = document.getElementById("temp9");
	
	if( (count%2) == 1){
		img1.src="dream-1play.gif";
		img2.src="dream.jpg";
		count--;
	}
	else{
		img1.src="dream.jpg";
		img2.src="dream-1play.gif";
	}
	num1++;
}

function toggleTable10(){
	var img10 = document.getElementById("avignon10");
	var tmp10 = document.getElementById("temp10");
	
	if( (count%2) == 1){
		img1.src="dream-1play.gif";
		img2.src="dream.jpg";
		count--;
	}
	else{
		img1.src="dream.jpg";
		img2.src="dream-1play.gif";
	}
	num1++;
}

function toggleTable11(){
	var img11 = document.getElementById("avignon11");
	var tmp11 = document.getElementById("temp11");
	
	if( (count%2) == 1){
		img1.src="dream-1play.gif";
		img2.src="dream.jpg";
		count--;
	}
	else{
		img1.src="dream.jpg";
		img2.src="dream-1play.gif";
	}
	num1++;
}

function toggleTable12(){
	var img12 = document.getElementById("avignon12");
	var tmp12 = document.getElementById("temp12");
	
	if( (count%2) == 1){
		img1.src="dream-1play.gif";
		img2.src="dream.jpg";
		count--;
	}
	else{
		img1.src="dream.jpg";
		img2.src="dream-1play.gif";
	}
	num1++;
}

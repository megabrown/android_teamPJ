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
	event.preventDefault();
		img1.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos1/Untitled-1-02-1.jpg?raw=true";
		tmp1.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos1/pos1.gif?raw=true";
		img2.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos2/Untitled-1-03-1.jpg?raw=true";
		tmp2.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos2/pos2.gif?raw=true";
		img3.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos3/Untitled-1-04-1.jpg?raw=true";
		tmp3.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos3/pos3.gif?raw=true";
		img4.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos4/Untitled-1-05-1.jpg?raw=true";
		tmp4.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos4/pos4.gif?raw=true";
		img5.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos5/Untitled-1-06-1.jpg?raw=true";
		tmp5.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos5/pos5.gif?raw=true";
		img6.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos6/Untitled-1-07-1.jpg?raw=true";
		tmp6.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos6/pos6.gif?raw=true";
		img7.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos7/Untitled-1-08-1.jpg?raw=true";
		tmp7.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos7/pos7.gif?raw=true";
		img8.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos8/Untitled-1-09-1.jpg?raw=true";
		tmp8.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos8/pos8.gif?raw=true";
		img9.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos9/Untitled-1-10-1.jpg?raw=true";
		tmp9.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos9/pos9.gif?raw=true";
		img10.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos10/Untitled-1-11-1.jpg?raw=true";
		tmp10.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos10/pos10.gif?raw=true";
		img11.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos11/Untitled-1-12-1.jpg?raw=true";
		tmp11.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos11/pos11.gif?raw=true";
		img12.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos12/Untitled-1-13-1.jpg?raw=true";
		tmp12.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos12/pos12.gif?raw=true";
}


function toggleTable1(){
	var img1 = document.getElementById("avignon1");
	var tmp1 = document.getElementById("temp1");
	
	if( (num1%2) == 1){
		img1.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos1/pos1.gif?raw=true";
		tmp1.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos1/Untitled-1-02-1.jpg?raw=true";
	}
	else{
		img1.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos1/Untitled-1-02-1.jpg?raw=true";
		tmp1.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos1/pos1.gif?raw=true";
	}
	num1++;
}

function toggleTable2(){
	var img2 = document.getElementById("avignon2");
	var tmp2 = document.getElementById("temp2");
	
	if( (num2%2) == 1){
		img2.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos2/pos2.gif?raw=true";
		tmp2.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos2/Untitled-1-03-1.jpg?raw=true";
	}
	else{
		img2.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos2/Untitled-1-03-1.jpg?raw=true";
		tmp2.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos2/pos2.gif?raw=true";
	}
	num2++;
}

function toggleTable3(){
	var img3 = document.getElementById("avignon3");
	var tmp3 = document.getElementById("temp3");
	
	if( (num3%2) == 1){
		img3.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos3/pos3.gif?raw=true";
		tmp3.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos3/Untitled-1-04-1.jpg?raw=true";
	}
	else{
		img3.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos3/Untitled-1-04-1.jpg?raw=true";
		tmp3.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos3/pos3.gif?raw=true";
	}
	num3++;
}

function toggleTable4(){
	var img4 = document.getElementById("avignon4");
	var tmp4 = document.getElementById("temp4");
	
	if( (num4%2) == 1){
		img4.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos4/pos4.gif?raw=true";
		tmp4.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos4/Untitled-1-05-1.jpg?raw=true";
	}
	else{
		img4.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos4/Untitled-1-05-1.jpg?raw=true";
		tmp4.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos4/pos4.gif?raw=true";
	}
	num4++;
}

function toggleTable5(){
	var img5 = document.getElementById("avignon5");
	var tmp5 = document.getElementById("temp5");
	
	if( (num5%2) == 1){
		img5.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos5/pos5.gif?raw=true";
		tmp5.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos5/Untitled-1-06-1.jpg?raw=true";
	}
	else{
		img5.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos5/Untitled-1-06-1.jpg?raw=true";
		tmp5.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos5/pos5.gif?raw=true";
	}
	num5++;
}

function toggleTable6(){
	var img6 = document.getElementById("avignon6");
	var tmp6 = document.getElementById("temp6");
	
	if( (num6%2) == 1){
		img6.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos6/pos6.gif?raw=true";
		tmp6.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos6/Untitled-1-07-1.jpg?raw=true";
	}
	else{
		img6.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos6/Untitled-1-07-1.jpg?raw=true";
		tmp6.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos6/pos6.gif?raw=true";
	}
	num6++;
}

function toggleTable7(){
	var img7 = document.getElementById("avignon7");
	var tmp7 = document.getElementById("temp7");
	
	if( (num7%2) == 1){
		img7.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos7/pos7.gif?raw=true";
		tmp7.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos7/Untitled-1-08-1.jpg?raw=true";
	}
	else{
		img7.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos7/Untitled-1-08-1.jpg?raw=true";
		tmp7.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos7/pos7.gif?raw=true";
	}
	num7++;
}

function toggleTable8(){
	var img8 = document.getElementById("avignon8");
	var tmp8 = document.getElementById("temp8");
	
	if( (num8%2) == 1){
		img8.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos8/pos8.gif?raw=true";
		tmp8.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos8/Untitled-1-09-1.jpg?raw=true";
	}
	else{
		img8.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos8/Untitled-1-09-1.jpg?raw=true";
		tmp8.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos8/pos8.gif?raw=true";
	}
	num8++;
}

function toggleTable9(){
	var img9 = document.getElementById("avignon9");
	var tmp9 = document.getElementById("temp9");
	
	if( (num9%2) == 1){
		img9.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos9/pos9.gif?raw=true";
		tmp9.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos9/Untitled-1-10-1.jpg?raw=true";
	}
	else{
		img9.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos9/Untitled-1-10-1.jpg?raw=true";
		tmp9.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos9/pos9.gif?raw=true";
	}
	num9++;
}

function toggleTable10(){
	var img10 = document.getElementById("avignon10");
	var tmp10 = document.getElementById("temp10");
	
	if( (num10%2) == 1){
		img10.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos10/pos10.gif?raw=true";
		tmp10.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos10/Untitled-1-11-1.jpg?raw=true";
	}
	else{
		img10.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos10/Untitled-1-11-1.jpg?raw=true";
		tmp10.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos10/pos10.gif?raw=true";
	}
	num10++;
}

function toggleTable11(){
	var img11 = document.getElementById("avignon11");
	var tmp11 = document.getElementById("temp11");
	
	if( (num11%2) == 1){
		img11.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos11/pos11.gif?raw=true";
		tmp11.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos11/Untitled-1-12-1.jpg?raw=true";
	}
	else{
		img11.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos11/Untitled-1-12-1.jpg?raw=true";
		tmp11.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos11/pos11.gif?raw=true";
	}
	num11++;
}

function toggleTable12(){
	var img12 = document.getElementById("avignon12");
	var tmp12 = document.getElementById("temp12");
	
	if( (num12%2) == 1){
		img12.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos12/pos12.gif?raw=true";
		tmp12.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos12/Untitled-1-13-1.jpg?raw=true";
	}
	else{
		img12.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos12/Untitled-1-13-1.jpg?raw=true";
		tmp12.src="https://github.com/megabrown/android_teamPJ/blob/master/avignon/pos12/pos12.gif?raw=true";
	}
	num12++;
}

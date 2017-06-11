var count = 1;
function toggleImg(){
	var img1 = document.getElementById("dream1");
	var img2 = document.getElementById("dream2");
	
	if( (count%2) == 1){
		img1.src="https://github.com/megabrown/android_teamPJ/blob/master/dream/dream-1play.gif?raw=true";
		img2.src="https://github.com/megabrown/android_teamPJ/blob/master/dream/dream-main.jpg?raw=true";
	}
	else{
		img1.src="https://github.com/megabrown/android_teamPJ/blob/master/dream/dream-main.jpg?raw=true";
		img2.src="https://github.com/megabrown/android_teamPJ/blob/master/dream/dream-1play.gif?raw=true";
	}
	count++;
}

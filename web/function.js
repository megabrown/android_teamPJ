jQuery(document).ready(function($) {	//html과 script가 준비된 시점
        $("#hm").click(function(event){           
                event.preventDefault(); //원래 실행될 기능 중지
                $('html,body').animate({scrollTop:$('#home').offset().top}, 900);
        });		//html body의 top을 offset으로 얻은 위치까지 스크롤 이동, 시간 900
});
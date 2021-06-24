jQuery(document).ready(function(){
	$('.slider_text').css('left','-300px').each(function(index){
		$(this).attr('data-index',index);
	});
	$('.control_button').each(function(index){
		$(this).attr('data-index',index);
	}).click(function(){
		var index = $(this).attr('data-index');
		moveSlider(index);
	});
	function moveSlider(index){
		var willMoveLeft = -(index*1920);
/* 		if(index==0){
			willMoveLeft = -(index*600);
			willMoveTop = -(0*400);
		}else if(index==1){
			willMoveLeft = -(index*600);
			willMoveTop = -(0*400);			
		}else if(index==2){
			willMoveLeft = -(index*600);
			willMoveTop = -(0*400);	
			
		}else if(index==3){
			willMoveLeft = -(0*600);
			willMoveTop = -(1*400);			
		}else if(index==4){
			willMoveLeft = -(1*600);
			willMoveTop = -(1*400);			
		}else{
			willMoveLeft = -(2*600);
			willMoveTop = -(1*400);						
		} */
		$('.slider_panel').animate({left:willMoveLeft},"slow");
		$('.control_button[data-index='+index+']').addClass('active');
		$('.control_button[data-index!='+index+']'/*전달받은 인덱스가 아닌 인덱스를 전부 없앰*/).removeClass('active');
		$('.slider_text[data-index='+index+']').show().animate({left:30},"slow");
		$('.slider_text[data-index!='+index+']').hide().animate({left:-300},"slow");
	}
	var randomNumber = Math.round(Math.random()*3);
	moveSlider(randomNumber);
	
	var n = randomNumber;
	var setIntervalId;
	$('.animation_canvas').on({
				mouseover:function(){
					clearInterval(setIntervalId);
				},
				mouseout:function(){
					timer();
				}
		});
		function timer(){
			setIntervalId = setInterval(function(){
				n++;
				if(n>$('.control_button').size()-1){n=0;};
				$('.control_button').eq(n).trigger('click');
			},1000);
		}
		timer();
		$('.left').click(function(){
				n--;
				if(n==$('.control_button').size()){n=0};
				$('.control_button').eq(n).trigger('click');
		});
		$('.right').click(function(){
				n++;
				if(n==$('.control_button').size()){n=0};
				$('.control_button').eq(n).trigger('click');
		});
});












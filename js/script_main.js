'use strict';

//fullpage 풀페이지 스크롤
	 $(function() {
		$('#fullpage').fullpage({
            fingersonly: true,
			anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage', 'seventhPage'],
			menu: '.rightNav',
			afterLoad: function(anchorLink, index){
				if(index == 2){ //두번째 페이지에 카운트업
					$('.volume').counterUp({delay: 10,time: 550});
				}
                if(index == 3){ //세번째 페이지에 카운트업
					$('.volume2').counterUp({delay: 10,time: 550});
				}
			}
		});
	});


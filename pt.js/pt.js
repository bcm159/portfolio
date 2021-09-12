	$(document).ready(function(){
//			$(window).scroll(function(){
//				if($(window).scrollTop()==0){
//					$(".slide").animate({left:"-300px"},500)
//				}
//			else if($(window).scrollTop()>=80){
//				if(!$(".slide").is(":animated")){
//					$(".slide").animate({left:"0px"},"fast")
//				}
//			}
//				
    $(".mbtn").click(function(){
				$("#slide").animate({
					left:'0'
				},"slow")
				$(".over").fadeIn("slow")
				$("#contents").animate({
					left:'300px'
				},'slow')
			})
			$(".xbtn").click(function(){
				$("#slide").animate({
					left:"-300px"
				},'slow')
				$(".over").fadeOut("slow")
				$("#contents").animate({
					left:"0px"
				},'slow')
			})
	})
			
		
//		누르면 이동할수 있는 스크립트
//		seq : 순서 , 순차적 의미 
		function pMove(seq){
			var pOffset=$(".div"+seq).offset()
			$('body,html').animate({
				scrollTop:pOffset.top
			})
		}

//var imgs=2;
//var now=0;
//function slide(){
//	now=(now==imgs)?0:now+=1;
//	
//  
//	$('.bgfixed li').eq(now).fadeIn()
//	$('.bgfixed li').eq(now-1).fadeOut()
//}
//
//function start(){
//	$('.bgfixed li').eq(0).siblings().fadeOut()
//	setInterval(slide,3000)
//}
//
//start()

		
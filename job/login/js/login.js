/*
	name:Ellen
 */
 	//页面登录方式切换
 	var $tab=$(".tab").children();//两个点击
 	var $login=$(".login")//两个页面
		$tab.click(function(){
 		$tab.show("act");
 		$login.show("active");
 		$(this).hide();
 		$login.eq($(this).index()).hide();
 	})
	var $input=$(".input");
	$input.keyup(function(){
		if($(this).val()){
			$(this).next().show();
		}else{
			$(this).next().hide();
		} 
	})
	$(".icon-x").click(function(){
		$(this).prev().val("");
		$(this).hide();
	})
	//二维码动画

	var $qrImg=$("#QrImg").parent();
	var $QrImg=$("#QrImg");
	var toggle=true;
	$qrImg.hover(function(){
		$QrImg.attr("style","transform: translate(-100px,0);-webkit-transform: translate(-100px,0);")
	},
	function(){
		$QrImg.attr("style","transform: translate(0,0);-webkit-transform: translate(0,0);");
		$("#phone-img").hide();
	})
	$QrImg.on("transitionend",function(){//运动完成就出现
		if($QrImg.css("transform")=="matrix(1, 0, 0, 1, -100, 0)"){
			$("#phone-img").show();
		}
	})
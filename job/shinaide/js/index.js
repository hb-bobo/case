 /*
 description:头部固定
 name:Ellen
 */  
 	// 扩展方法
 	$.fn.tabAll=function(){
 	}
 	//菜单
 	!function menu(){
 		var $btnMenu=$("#btn-menu");
 		var $munu=$("#menu");
 		var $munuBlank=$(".munu-blank");
 		var toggle=true;
 		//设置菜单高
 		$munu.css({"height":$(window).height()});
 		$munuBlank.css({"height":$(window).height()});
 		$btnMenu.on("tap",function(){
 			tab();			
 			return false;
 		})
 		//点击空白的地方菜单也回去
 		$munuBlank.on("tap",function(){
 			tab();			
 			return false;
 		})
 		function tab(){
 			if(toggle){
 				$munuBlank.show();
 				$munu.css({transform:"translate(2.45rem,0)","-webkit-transform":"translate(2.45rem,0)"});
 			}else{
 				$munuBlank.hide();
 				$munu.css({transform:"translate(-2.45rem,0)","-webkit-transform":"translate(-2.45rem,0)"});
 			}
 			toggle=!toggle;
 		}
 	}(window)
	//seach
	!function seach(window){
		var $seach=$("#seach");
		var $btnSeach=$("#btn-seach");
		var $seachMain=$(".seach-main");
		var $seachBack=$("#seach-back");
		var $cancel=$("#cancel");
		var toggle=true;
		var ready=true;
		//设置搜索框的高
	 	$seach.css({"height":$(window).height()});
	 	$seachMain.css({"height":$(window).height()});
	 	//搜索框触摸点击事件
	 	$btnSeach.on("tap",function(){
	 		if(toggle){
	 			$seach.css({display:"block"});
	 			$seachMain.css({transform:"translate(0,0)","-webkit-transform":"translate(0,0)"}); 	 			
	 			setTimeout(function(){
	 				$seachMain.css({transform:"translate(-4.8rem,0)","-webkit-transform":"translate(-4.8rem,0)"}); 
	 			},20)
	 		}else{	
	 			$seachMain.css({transform:"translate(0,0)","-webkit-transform":"translate(0,0)"}); 
	 			//$seachMain.css({"right":"-5rem"}); 			
	 			setTimeout(function(){	 				
	 				$seach.css({display:"none"});
	 			},500)	 				 			
	 		}
	 		toggle=!toggle;
	 		return false;
	 	})
	 	//取消
	 	$seachBack.on("tap",function(){
	 		toggle=!toggle;
	 		$seachMain.css({transform:"translate(0,0)","-webkit-transform":"translate(0,0)"}); 
	 		setTimeout(function(){	 				
	 				$seach.css({display:"none"});
	 		},500)	
	 		return false;
	 	})
	 	//返回
	 	$cancel.on("tap",function(){
	 		toggle=!toggle;
	 		$seachMain.css({transform:"translate(0,0)","-webkit-transform":"translate(0,0)"}); 
	 		setTimeout(function(){	 				
	 				$seach.css({display:"none"});
	 		},500)
	 		return false;	
	 	})
	 }(window)
	 //index的tab
	 !function tab(window){
	 	var $preBidding=$("#order .pre-bidding");
	 	var $orderItem=$(".order-item");
	 	var $aI=$("#order i");	 	
	 	$preBidding.on("tap",function(){	 		
	 		if(!$(this).hasClass("muted")){
	 			//全部重置
	 			$orderItem.removeClass("active");
	 			$preBidding.removeClass("active");	 			
	 			$aI.removeClass("act");
	 			$preBidding.addClass("color-ok");
	 			//给当前加样式
	 			$(this).addClass("active");
	 			$orderItem.eq($(this).index()).addClass("active");
	 			$aI.eq($(this).index()).addClass("act");//字体图标加色
	 			$preBidding.eq($(this).index()).removeClass("color-ok");
	 		};
	 		return false;
	 	})
	 }(window);
	 //pd的切换
	 !function(window){
	 	var $tab=$(".pb-tab").find(".pre-bidding");
	 	var $pbItem=$(".pb-item");
	 	$tab.on("tap",function(){
	 		$tab.removeClass("active");
	 		$pbItem.removeClass("active");
	 		$(this).addClass("active");
	 		$pbItem.eq($(this).index()).addClass("active");
	 		return false;
	 	})
	 }(window);

	 //pd的列表下拉	 
	!function(window){
		var $more=$(".pb-more");
		var $list=$(".list");
		var timer=null;
		var h=0;
		$more.on("tap",function() {
			var $Ul=$(this).parent().next();
			var $aLi=$Ul.children();
			$(this).toggleClass("merge");
			if($Ul.height()==0){
				$Ul.css({"height":$aLi.eq(0).height()*$aLi.length+5+"px","borderBottom":"0.2rem solid #FAFAFA"});
			}else{
				$Ul.css({"height":"0px","borderBottom":"none"});
			}	
			return false;		
		});
	}(window);

	//通过拒绝选择
	$(".option").on("tap",function(){
		$(".option").removeClass("selected");
		$(this).addClass("selected");
		return false;
	})

	 //查看更多
	 
	 !function more(){
	 	$(".show-change").on("tap",function(){
	 		$(this).children().eq(2).css({display:"block"});
	 		return false;	 		
		})
		$(".change-close").on("tap",function(){
		 	$(this).parent().parent().css({"display":"none"});
		 	return false;
		})
	 }(window)

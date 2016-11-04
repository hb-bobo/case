 /*
 name:Ellen
 */  
/*
返回上一页
 */
var aBack=document.querySelectorAll(".back");
	for(var i=0,len=aBack.length;i<len;i++){
		aBack[i].onclick=function(){
			window.history.back(-1);
			return false;
		}
	}

/*
 footer
 */
!function($){
	var aFooter=document.querySelectorAll("footer a");
	for(var i=0,len=aFooter.length;i<len;i++){
		aFooter[i].addEventListener("touchstart",function(){
			for(var i=0;i<aFooter.length;i++){
				aFooter[i].className="";
			}
			this.className="act";
		},false)
	}
}(Zepto)
/*我的订单*/
!function(undefined){
	$aHead=$("#order-head").children();
	$reserveOrder=$("#meeting-list").children();
	$aHead.on("tap",function(){
		$aHead.removeClass("act");
		$reserveOrder.removeClass("act");
		$(this).addClass("act");
		$reserveOrder.eq($(this).index()).addClass("act");
	})
}()

/*获取当前时间*/
function getTime(){
    var d=new Date();			    
    var year=d.getFullYear();
    var month=d.getMonth()+1;
    month=fillZero(month);
    var date=d.getDate();
    date=fillZero(date);
    return year+"-"+month+"-"+date;
}
function fillZero(n){
    return n<10?"0"+n:""+n;
}
function getCookie(name){
    var str = document.cookie;
    var arr=str.split('; ');
    for(var i=0;i<arr.length;i++){
        var arr2=arr[i].split('='); 
        if(arr2[0]==name){
            return arr2[1];
        }
    }
    return '';
}

function setCookie(name,value,timeout){
    var d=new Date();
    d.setDate(d.getDate()+timeout);//天数
    document.cookie=name+'='+value+';expires='+d;
}
